const fs = require('browserify-fs')

const scrapeRawJs = function(component) {
  // check if directory exists
  // returns null if not found
  // if (!fs.existsSync(`../../core/${component}/${component}.js`)) return
  // read the js file and return as a string
  return fs
    .readFile(`../../core/${component}/${component}.js`)
    .toString('utf8')
}
export default scrapeRawJs
