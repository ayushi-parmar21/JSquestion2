function outer() {
    a = 5;

    function inner() {
        b = 6;
        console.log(a + b)
    }
    return inner
}
var c = outer()
c();