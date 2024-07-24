import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Type in your URL:", name: "URL" }])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("userInput.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });

    fs.readFile("userInput.txt", "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
