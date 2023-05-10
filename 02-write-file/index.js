const path = require("path");
const fs = require("fs");
const { stdin, stdout } = process;

function createTextFile() {
    const filePath = path.join(__dirname, "text.txt");

    function writeToFile(text) {
        fs.appendFile(filePath, text + "\n", (err) => {
            if (err) throw err;
            promptForText();
        });
    }

    function promptForText() {
        stdout.write('Enter text ("exit" to exit): ');
        stdin.once("data", (data) => {
            const text = data.toString().trim();
            if (text === "exit") {
                console.log("Exit program");
                process.exit();
            }
            writeToFile(text);
        });
        process.on("SIGINT", () => {
            process.stdout.write("\n\n  ***Good bye!***  ");
            process.exit();
        });
    }
    promptForText();
}

createTextFile();
