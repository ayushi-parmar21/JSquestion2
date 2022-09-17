for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 7 == 0) {
        console.log("NavGurukul")
    } else if (i % 7 == 0) {
        console.log("Gurukul")
    } else if (i % 3 == 0) {
        console.log("Nav")
    } else {
        console.log(i)
    }
}