var name = require("readline-sync");
let user = name.question("enter your name: ");
let str = ""
for (var i = user.length - 1; i >= 0; i--) {
    str += user[i]
}
if (str == user) {
    console.log("palindrom number ")
} else {
    console.log("not a palindrome number:")
}