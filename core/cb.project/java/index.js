var path = require("path");

module.exports = {
    id: "java",
    name: "Java",

    sample: path.resolve(__dirname, "sample"),
    detector: path.resolve(__dirname, "detector.sh")
};