console.log("Hello world")

// function, ami kap 2 számot, visszaadja az összegét, de úgy, hogy ha kisebb 0, akkor 0, ha nagyobb 10, akkor sok, ha nem egész, akkor lefelé kerekítve

// const preschoolSum = (num1, num2) => {
//     let result = num1 + num2;
//     if (result < 0) {
//         console.log(0)
//         return 0
//     } else if (result > 10) {
//         console.log("sok")
//         return "sok"
//     } else {
//         console.log(Math.floor(result))
//         return Math.floor(result)
//     }
// }

const preschoolSum = (num1, num2) => {
    let result = num1 + num2;
    if (result < 0) return 0;
    if (result > 10) return "sok";
    return Math.floor(result);
}

module.exports = preschoolSum;
