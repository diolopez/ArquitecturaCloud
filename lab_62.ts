import { readFile, readFileSync } from "fs";

const fileName = "my_notes.txt";

const callback = (err: any, data: any) => {
    console.log("-- Callback --");
    console.log(data);
};

const readFileReturns = readFile(fileName, {encoding: "utf8"}, callback);
console.log(`readFile returns ${readFileReturns}`);
console.log("Continuing processing...");

const syncJsonData: any = readFileSync(fileName, "utf8");
console.log(syncJsonData)
