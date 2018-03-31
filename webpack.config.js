var path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "emoji-print.js",
    library: "emojiPrint"
  }
};
