// module exports is part of nodejs file module system. The object from module exports is the object you will recive 
/*when the file is requred 

https://stackify.com/node-js-module-exports/

what is a module - this is a chunck of code that we combine together and can reuse

When Node.js was invented, modules and code encapsulation were high on the priority list.
 The creators of Node.js were keen for it to not suffer the same fate as the browser by having a big, 
 dangerous global scope. So they implemented Node.js with a module specification called CommonJS
  (which is where you get the module exports and require syntax from).


  Nodejs runtime supports es6/7 and you don't transpile any code that will be used ny nodejs runtime

  If you use nodejs to build js bundle files that are then used in web you may need to use transpilers like babel
  - but this is because there are users with old browsers, while the nodejs is in your control
*/

const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8182,
        contentBase: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: ['babel-loader']
        }]
    }
}