const functions = require('firebase-functions');

const rp = require('request-promise');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// 
exports.helloWorld = functions.https.onRequest((request, response) => {
//
  response.send("Hello from Firebase!");
//
 });
exports.postRequests = functions.https.onRequest((request, response) => {

 // This can be downloaded directly:
 url = "https://data.fixer.io/api/latest"
 rp(url)
    .then(function (res) {
   
     response.send(res)
    })
    .catch(function (err) {
    });
  	



});

