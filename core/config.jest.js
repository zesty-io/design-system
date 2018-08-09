module.exports = {
  // "bail": true,
  verbose: true,
  testURL: "http://localhost",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "test-file-stub",
    "\\.(css|less)$": "identity-obj-proxy"
  }
};
