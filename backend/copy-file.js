const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "package.json");
const destination = path.join(__dirname, "dist", "package.json");

fs.copyFileSync(source, destination);
