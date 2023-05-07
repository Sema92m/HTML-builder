const path = require("path");
const fs = require("fs");
const { stdout } = process;

function scanFolder(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stats) => {
                if (err) throw err;
                if (stats.isDirectory()) return;
                stdout.write(
                    `${path.parse(file).name}  - ${path
                        .extname(file)
                        .substring(1)} - ${(stats.size / 1000).toFixed(2)}kb\n`
                );
            });
        });
    });
}

scanFolder("./03-files-in-folder/secret-folder");
