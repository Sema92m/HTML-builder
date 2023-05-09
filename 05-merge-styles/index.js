const fs = require("fs");
const path = require("path");
const { stdout } = process;

async function mergeCssFiles() {
    const cssDir = path.join(__dirname, "styles");
    const outputPath = path.join(__dirname, "project-dist/bundle.css");
    try {
        const files = await fs.promises.readdir(cssDir);
        const cssFiles = files.filter((file) => path.extname(file) === ".css");
        const cssContent = await Promise.all(
            cssFiles.map(async (file) => {
                const cssFileContent = await fs.promises.readFile(
                    path.join(cssDir, file),
                    "utf-8"
                );
                return cssFileContent;
            })
        );
        await fs.promises.writeFile(outputPath, cssContent.join("\n"));
        stdout.write(
            "bundle.css created, CSS files from  ./05-merge-styles merged to the ./05-merge-stylesproject-dist/bundle.css"
        );
    } catch (err) {
        console.error(err);
    }
}

mergeCssFiles();

// function mergeCssFiles() {
//     const cssDir = path.join(__dirname, "styles");
//     const outputPath = path.join(__dirname, "project-dist/bundle.css");
//     fs.readdir(cssDir, (err, files) => {
//         if (err) throw err;
//         const cssFiles = files.filter((file) => path.extname(file) === ".css");
//         const cssContent = cssFiles.map((file) =>
//             fs.readFileSync(path.join(cssDir, file), "utf-8")
//         );
//         fs.writeFile(outputPath, cssContent.join("\n"), (err) => {
//             if (err) throw err;
//             stdout.write(
//                 "bundle.css created, CSS files from  ./05-merge-styles merged to the ./05-merge-stylesproject-dist/bundle.css"
//             );
//         });
//     });
// }
