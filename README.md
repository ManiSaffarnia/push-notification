# Mani's Playground for web push notification 🍉

This project is a playground for testing web push notification

## Preparing your development environment

In order to get the project up an running you need to go through a few steps.

### 1. **Install dependecies**

```
cd /server
npm i
```

This should create a node_modules and install all dependencies

### 2. **Start a mongo db container on docker**
You should pre-installed docker

pull the mongo image from docker-hub
```
docker pull mongo
```
run a container base on mongo image

```
docker run -d -p 27017:27017 --name mongo mongo:latest
```
This should create a mongo container for you.
Later on, you can just start the already existing container like this:

```
docker start mongo
```

### 3. **Start the server**

make sure you are in the server directory, and then run:
```
npm start
```

This should start the server which serves on http://localhost:5000