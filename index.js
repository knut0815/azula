const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

let {platform} = process;

const addon = require(`./build/Release/addon-${platform}.node`);

module.exports = addon;
