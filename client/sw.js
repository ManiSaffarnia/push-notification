// STEP 0: register a service worker
if ('serviceWorker' in navigator) {// Check if service workers are supported
  navigator.serviceWorker.register('/sw.js', { //register a simple service worker - it does nothing
    scope: '/',
  });
}

const publicVapidKey = 'BMrfFtMtL9IWl9vchDbbbYzJlbQwplyZ_fbv8Pei8gPNna_Dr1O-Ng7U7fy0LLqz5RKIxEytTIzyk6TLrcKbN30';

// Copied from the web-push documentation
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

// Step 1: Subscribe to push notification
subscribe = async () => {
  if (!('serviceWorker' in navigator)) return;

  const registration = await navigator.serviceWorker.ready; // get the current service

  // Subscribe to push notifications
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

  // Step 2: send subscription to the server
  await fetch('/subscription', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json',
    },
  });
};

// send a GET request to server to trigger the push notification
broadcast = async () => {
  await fetch('/broadcast', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
};

// Handling the push message
// In the service worker we can listen to the push event and then show a notification
self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
});