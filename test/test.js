// const { stdout, stderr } = process;

// process.on("exit", (code) => {
//     if (code === 0) {
//         stdout.write("Всё в порядке");
//     } else {
//         stderr.write(
//             `Что-то пошло не так. Программа завершилась с кодом ${code}`
//         );
//     }
// });

// const { stdin, stdout } = process;

// stdout.write("What is your name?");
// stdin.on("data", (data) => {
//     const dataStringified = data.toString().split("").reverse().join("");
//     stdout.write(dataStringified);
//     process.exit();
// });

// console.log(process.argv.slice(2));

// const { stdout, stdin, exit } = process;
// const flag = process.argv[2];
// const allowedFlags = ["-m", "-s"];
// if (!allowedFlags.includes(flag)) {
//     stdout.write("Попробуйте ещё раз запустить файл с флагом -s или -m");
//     exit();
// }
// stdout.write("Введите, пожалуйста, два числа\n");
// stdin.on("data", (data) => {
//     const numString = data.toString();
//     const numStringsArray = numString.split(" ");
//     const hasIncorrectLength = numStringsArray.length !== 2;
//     const hasIncorrectValues = numStringsArray.some((numStr) =>
//         Number.isNaN(+numStr)
//     );
//     if (hasIncorrectLength || hasIncorrectValues) {
//         stdout.write("Нужно ввести 2 числа, разделенных пробелом");
//         exit();
//     }
//     const [firstNum, secondNum] = numStringsArray.map((numStr) => +numStr);
//     if (flag === "-s") {
//         const sum = firstNum + secondNum;
//         stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
//     } else {
//         const mult = firstNum * secondNum;
//         stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
//     }
//     exit();
// });

// console.log(__dirname);
// console.log(__filename);

// const { stdout, stdin, exit } = process;
// const flag = process.argv[2];
// // const allowedFlags = ["-d", "-f"];

// if (flag === "-d") {
//     stdout.write(__dirname);
// } else if (flag === "-f") {
//     stdout.write(__filename);
// } else {
//     stdout.write("Пожалуйста, запустите программу с флагом -d или -f");
// }
// const path = require("path");
// console.log(path.basename("test.js")); // index.js - имя файла на Windows, полный путь к файлу на POSIX-системах
// console.log(path.dirname("test.js")); // C:\Users\Admin\Desktop\nodejs-basic - название папки
// console.log(path.extname("test.js")); // .js - расширение файла
// console.log(path.parse("test.js"));
// const fs = require("fs");
// const path = require("path");
// console.log(__dirname);
// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     if (err) throw err;
//     console.log("Папка была создана");
// });

// const fs = require("fs");
// const path = require("path");

// fs.writeFile(path.join(__dirname, "newdir", "newFile.txt"), "Hello", (err) => {
//     console.log(__dirname),
//         (err) => {
//             if (err) throw err;
//             console.log("Файл был создан");
//         };
//     console.log("Файл был создан1");
// });

// const fs = require("fs");
// const path = require("path");

// //create dir
// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//     if (err) throw err;
//     console.log("Папка была создана");
// });
// //create file
// fs.writeFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "Hello world",
//     (err) => {
//         if (err) throw err;
//         console.log("Файл был создан");
//     }
// );

// fs.appendFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "\n From append file",
//     (err) => {
//         if (err) throw err;
//         console.log("Файл был изменен");
//     }
// );

// fs.readFile(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     "utf-8",
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// fs.rename(
//     path.join(__dirname, "notes", "mynotes.txt"),
//     path.join(__dirname, "notes", "notes.txt"),
//     (err) => {
//         if (err) throw err;
//         console.log("Файл переименован");
//     }
// );

// const http = require("http");

// const PORT = 3000;

// const requestHandler = (request, response) => {
//     const { method, url } = request;
//     const heading = `<h1 style="color: red">${url} page</h1>`;
//     const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
//     console.log(`Получен ${method}-запрос на ${url}`);
//     response.write(heading);
//     response.end(content);
// };

// const server = http.createServer(requestHandler);

// server.listen(PORT, "localhost", () => {
//     console.log(`Сервер запущен на порту ${PORT}`);
// });

// require("colors");
// const text = "Hello, world!";
// console.log(text.rainbow);

const { stdin, stdout } = process;

stdin.on("data", (data) => {
    const dataStringified = data.toString();
    stdout.write("Cообщение в верхнем регистре: ");
    stdout.write(dataStringified.toUpperCase());
    process.exit();
});
