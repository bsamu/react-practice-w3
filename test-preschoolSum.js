const preschoolSum = require("./preschoolSum.js")
const test = require("./myTestLib.js")

// console.log(preschoolSum(1, 1));
// console.log(preschoolSum(1, 2.2));
// console.log(preschoolSum(-12, 2.2));
// console.log(preschoolSum(10, 2.2));
// console.log(preschoolSum(9));
// console.log(preschoolSum(2, 2.9));
// console.log(preschoolSum(2, 2.1));
// console.log(preschoolSum("1asd", 2.2));

// azért jó így, mert nem kell törölgetni az alkalmazásból, később is bármikor futtathatjuk
// Ha node-olunk, így, a régi syntax szerint kell az import-export

// const test = (expected, actual, description) => {
//     console.log(description);
//     if (expected === actual) console.log("Success");
//     if (expected !== actual) console.log("Error");
//     console.log("-----------------------------------")
// }
// kiszervezzük egy külön testlibraryba, így ha más is felhasználná, be tudja húzni

test(8, preschoolSum(4, 4), "Tíz alatti egész eredménynél magát a számot kapjuk.");
test(0, preschoolSum(-14, 4), "Negatív eredmény esetén 0-t kapunk.");
test(3, preschoolSum(1.4, 2.2), "NEM egész 0<x<10 esetén lefelé kerekít.");
test(10, preschoolSum(4.5, 5.5), "Határérték teszt, 10et ad vissza.");
test("sok", preschoolSum(9, 2.1), "Tíz felett 'sok' stringet kapunk.");
test("asd", preschoolSum(9, 2.1), "Hibás tesztet futtatok mert csak.");

