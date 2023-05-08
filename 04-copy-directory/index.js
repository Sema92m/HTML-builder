const fs = require("fs");
const path = require("path");
const directoryPathCopy = path.join(__dirname, "files-copy");
const folderPath = path.join(__dirname, "files");

function del() {
    fs.rm(directoryPathCopy, { recursive: true, force: true }, (err) => {
        if (err) throw err;
        console.log("del");
        create();
    });
}
function create() {
    fs.cp(folderPath, directoryPathCopy, { recursive: true }, (err) => {
        if (err) throw err;
        console.log("created");
    });
}

fs.access(directoryPathCopy, (err) => (err ? create() : del()));
