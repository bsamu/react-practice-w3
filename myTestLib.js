const test = (expected, actual, description) => {
    console.log(description);
    if (expected === actual) console.log("Success");
    if (expected !== actual) console.log("Error");
    console.log("-----------------------------------")
};

module.exports = test;