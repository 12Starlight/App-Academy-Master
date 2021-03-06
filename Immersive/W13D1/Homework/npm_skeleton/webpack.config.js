const path = require('path');


module.exports = {
  context: __dirname,
  entry: './entry.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};


// const path = require('path');

// module.exports = {
//   context: __dirname,
//   entry: "./index.jsx",
//   output: {
//     path: path.resolve(__dirname),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['@babel/env', '@babel/react']
//           }
//         },
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };