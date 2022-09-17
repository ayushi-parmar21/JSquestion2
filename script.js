var readlineSync = require('readline-sync');
var answer = readlineSync.question('What is your favorite food? :');
console.log('Oh, so your favorite food is ' + answer);