let name = require("readline-sync");
var user = name.questionInt("enter a number how many time you sum of number: ")
let sum = 0;
for (let i = 1; i <= user; i++) {
    let name1 = require("readline-sync");
    var user1 = name1.questionInt("enter a number: ")
    sum += user1
}
console.log(sum)