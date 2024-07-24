# QR Code Generator

This simple Node.js application generates a QR code from a user-provided URL and saves it as an image file. Additionally, the URL is saved to a text file and read back to the console.

## Features

- Prompts the user for a URL.
- Generates a QR code image for the provided URL.
- Saves the QR code as `qr_img.png`.
- Writes the provided URL to a file named `userInput.txt`.
- Reads and logs the contents of `userInput.txt` to the console.

## Installation

1. Clone this repository or download the source code.
2. Navigate to the project directory and run the following command to install the necessary dependencies:
   ```bash
   npm install
## Usage
1. Run the application using the following command.
   ```bash
   node index.js
2. Follow the prompt to enter a URL.
3. The application will generate a QR code image and save it as qr_img.png in the current directory.
4. The entered URL will also be saved in userInput.txt, and the content of this file will be displayed in the console.

## Dependencies
* inquirer: A collection of common interactive command-line user interfaces.
* qr-image: A QR code image generator.
* fs: Node.js file system module for reading and writing files.
