let sum = 0;
for (let i = 50; i >= 40; i--) {
    var late = require("readline-sync");
    let user = late.questionInt("enter a number pleace: ")
    sum += user
}
console.log(sum)