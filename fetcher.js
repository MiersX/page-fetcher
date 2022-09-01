//  Take 2 command line arguments.
// A URL and a Local File Path

// It should download the resource at the url to the local path on your machine. 
// Upon completion it should print out a message like "Downloaded and saved xxxx bytes to ./index.html"

// node fetcher.js http://www.example.edu/ ./index.html
// Downloaded and saved 3261 bytes to ./index.html

// Make an HTTP request and wait for the response
// After the HTTP request is complete, take the data you receive and write it to a file in your local filesystem.
// Controlling flow of async, you can use nested callbacks.

// 1 character is equal to 1 byte

// use node's fs (filesystem) module to write the file
// use callback approach. Do not use pipe function or synchronous functions.

const request = require('request');
const fs = require('fs');
args = process.argv.slice(2);



request.get(args[0], (error, response, body) => {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode);
  let data = body;

  fs.writeFile(args[1], data, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("File written successfully")
      console.log(`Downloaded and saved ${data.length} bytes to: ${args[1]}`)
      //console.log(fs.readFileSync(`${args[1]}`, "utf8"))
    }
  });
});





