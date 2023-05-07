const fs = require("fs");
const path = require("path");

function copyDir(source, destination) {
    if (fs.existsSync(destination)) {
        deleteFilesInFolder("./04-copy-directory/files-copy");
    } else if (!fs.existsSync(destination)) {
        fs.mkdirSync(destination);
    }
    const files = fs.readdirSync(source);
    files.forEach((file) => {
        const sourcePath = path.join(source, file);
        const destinationPath = path.join(destination, file);
        fs.copyFileSync(sourcePath, destinationPath);
    });
}
copyDir("./04-copy-directory/files", "./04-copy-directory/files-copy");

function deleteFilesInFolder(folderPath) {
    const files = fs.readdirSync(folderPath);
    files.forEach((file) => {
        const filePath = path.join(folderPath, file);
        const stats = fs.lstatSync(filePath);
        if (stats.isDirectory()) {
            deleteFilesInFolder(filePath);
        } else {
            fs.unlinkSync(filePath);
        }
    });
}
