'use strict';

const url = 'mongodb+srv://admin:admin@cluster0.svbbn.mongodb.net/users?retryWrites=true&w=majority'
// const url = 'mongodb+srv://admin1:admin1@cluster0-onqm5.gcp.mongodb.net/users?retryWrites=true&w=majority'
var config ={
    "Mongo-URL":url
}

// make this available to our config in our Node applications
module.exports = config;


// mongodb+srv://admin:admin@cluster0-onqm5.gcp.mongodb.net/users?retryWrites=true&w=majority