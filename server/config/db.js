const mongoose = require('mongoose')

module.exports =  () => {
  // Connect to the database
  const databaseURI = 'mongodb://localhost/web-push-notifications';
  mongoose.connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('connected to the db...')
  }).catch((err)=>{
    console.error(`Couldn't connect to the database: ${e}`);
    process.exit(1);
  });
};

