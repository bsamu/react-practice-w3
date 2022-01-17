const preschoolSum = require('./preschoolSum.js');

test("Tíz alatti egész eredménynél magát a számot kapjuk.", () => {
    expect(preschoolSum(4, 4)).toBe(8);
});

test("Negatív eredmény esetén 0-t kapunk.", () => {
    expect(preschoolSum(-111, 4)).toBe(0);
});

test("Negatív eredmény esetén 0-t kapunk.", () => {
    expect(preschoolSum(-111, 4)).toBe(66);
});

// npm run test terminalba, futtatjuk
// toBe(66) nem szerencsés, mert itt a tesztet direkt rosszul írtuk, nem a function-t rontottuk el.
// myTestLib.js-re már nincs szükség, test-preschoolSum.js-re sincs
