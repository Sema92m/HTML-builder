console.log("123");
const { stdin, stdout } = process;
const fs = require("fs");
const path = require("path");

fs.writeFile(path.join("02-write-file", "mynotes.txt"), "", (err) => {
    if (err) throw err;
    console.log("Файл был создан");
    // stdin.on("data", (data) => {
    //     const dataStringified = data.toString();
    //     stdout.write("Напиши текст");
    //     fs.appendFile(
    //         path.join("02-write-file", "mynotes.txt"),
    //         dataStringified,
    //         (err) => {
    //             if (err) throw err;
    //             console.log("Файл был изменен");
    //         }
    //     );
    //     process.exit();
    // });
    process.exit();
});
const a = stdin.on("data", (data) => {
    const dataStringified = data.toString();
    stdout.write("Cообщение в верхнем регистре: ");
    stdout.write(dataStringified.toUpperCase());
    process.exit();
});

stdout.write("Как тебя зовут?\n");

stdin.on("data", (data) => {
    const name = data.toString();
    fs.appendFile(
        path.join(__dirname, "notes", "mynotes.txt"),
        " From append file",
        (err) => {
            if (err) throw err;
            console.log("Файл был изменен");
        }
    );
    process.exit();
});

// fs.appendFile(path.join("02-write-file", "mynotes.txt"), a, (err) => {
//     if (err) throw err;
//     console.log("Файл был изменен");
// });
