const path = require("path");



module.exports = {
    entry: "./src/client/index.js",
    output: {
      library: 'Client',
      libraryTarget: 'var'
    },
    
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          
        ]
    },
    
};
