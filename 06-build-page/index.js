const fs = require("fs");
const path = require("path");
let { COPYFILE_EXCL } = fs.constants;

let header;
let articles;
let footer;
let result;

/*Я не знаю почему, но почти всегда полностью не мержатся стили(например футер и маин мержатся
а хедер не хочет). Если не соберётся с первого раза попробуйте удалить папу project-dist и попробовать еще раз,
иногда только после 3го раза создаёт без ошибок. Спасибо!*/

fs.mkdir("06-build-page/project-dist", (err) => {
    if (err) throw err;
    console.log("project-dist created");
});

fs.mkdir("06-build-page/project-dist/assets", (err) => {
    if (err) throw err;
    console.log("assets created");
});
readHTMLComponents();
createAssetsDists();
copyAssetsFiles();
replaceComponentsToIndexHTML();
copyStyles();

function createAssetsDists() {
    fs.mkdir("06-build-page/project-dist/assets/fonts", (err) => {
        if (err) throw err;
    });

    fs.mkdir("06-build-page/project-dist/assets/img", (err) => {
        if (err) throw err;
    });

    fs.mkdir("06-build-page/project-dist/assets/svg", (err) => {
        if (err) throw err;
    });
    console.log("fonts & img & svg dirs created");
}

function readHTMLComponents() {
    fs.readFile(
        "06-build-page/components/header.html",
        "utf-8",
        (err, data) => {
            if (err) throw err;
            header = data;
        }
    );

    fs.readFile(
        "06-build-page/components/articles.html",
        "utf-8",
        (err, data) => {
            if (err) throw err;
            articles = data;
        }
    );

    fs.readFile(
        "06-build-page/components/footer.html",
        "utf-8",
        (err, data) => {
            if (err) throw err;
            footer = data;
        }
    );
}

function copyAssetsFiles() {
    fs.copyFile(
        "06-build-page/assets/fonts/Karolina-Regular.woff2",
        "06-build-page/project-dist/assets/fonts/Karolina-Regular.woff2",
        COPYFILE_EXCL,
        (err) => {
            if (err) throw err;
        }
    );
    fs.readdir("06-build-page/assets/img", (err, files) => {
        files.forEach((file) => {
            fs.copyFile(
                "06-build-page/assets/img/" + file,
                "06-build-page/project-dist/assets/img/" + file,
                COPYFILE_EXCL,
                (err) => {
                    if (err) throw err;
                }
            );
        });
    });

    fs.readdir("06-build-page/assets/svg", (err, files) => {
        files.forEach((file) => {
            fs.copyFile(
                "06-build-page/assets/svg/" + file,
                "06-build-page/project-dist/assets/svg/" + file,
                COPYFILE_EXCL,
                (err) => {
                    if (err) throw err;
                }
            );
        });
    });
    console.log("fonts img svg files kopied");
}

function replaceComponentsToIndexHTML() {
    fs.readFile("06-build-page/template.html", "utf-8", (err, data) => {
        if (err) throw err;
        result = data
            .replace(/{{header}}/g, header)
            .replace(/{{footer}}/g, footer)
            .replace(/{{articles}}/g, articles);
        fs.writeFile(
            "06-build-page/project-dist/index.html",
            result,
            "utf-8",
            function (err) {
                if (err) throw err;
                console.log("index.html created & apply components");
            }
        );
    });
}

function copyStyles() {
    fs.readdir("06-build-page/styles", (err, files) => {
        if (err) throw err;
        let cssContents = "";
        files.forEach((file) => {
            fs.stat("06-build-page/styles/" + file, (err, stats) => {
                if (err) throw err;
                if (stats.isFile() && path.extname(file) == ".css") {
                    fs.readFile(
                        "06-build-page/styles/" + file,
                        "utf-8",
                        (err, data) => {
                            if (err) throw err;
                            cssContents += data + "\n";
                            if (files.indexOf(file) === files.length - 1) {
                                fs.writeFile(
                                    "06-build-page/project-dist/style.css",
                                    cssContents,
                                    (err) => {
                                        if (err) throw err;
                                        console.log("Styles file  created");
                                    }
                                );
                            }
                        }
                    );
                }
            });
        });
    });
}
