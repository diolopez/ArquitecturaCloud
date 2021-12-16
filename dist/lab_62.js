"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var fileName = "my_notes.txt";
var callback = function (err, data) {
    console.log("-- Callback --");
    console.log(data);
};
var readFileReturns = fs_1.readFile(fileName, { encoding: "utf8" }, callback);
console.log("readFile returns " + readFileReturns);
console.log("Continuing processing...");
var syncJsonData = fs_1.readFileSync(fileName, "utf8");
console.log(syncJsonData);
