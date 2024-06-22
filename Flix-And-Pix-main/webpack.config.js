const path = require('path')

// this represents that we have exported an object
module.exports = {
  mode: 'development',   // for production we use production mode
  entry: './index.js',  // this is the entry file i.e where the webpack should initially look for js source file
  output: {
    path: path.resolve(__dirname),  // path of directory where we want output file
    filename: 'bundle.js'   // name of file where output is stored
  },
  watch: true
}