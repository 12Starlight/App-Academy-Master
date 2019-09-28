npm init --yes

npm install package1 package2 etc:
  npm install webpack webpack-cli @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom

create webpack.config.js and assign module.exports to the Webpack configuration object
  set entry and output files
  configure babel transpilation of react and ES6 syntax
  add a devtool
  ensure that .js and .jsx files resolve automatically

in package.json
  add webpack script for webpack to package.json
    "webpack": "webpack --mode=development --watch"

create a .gitignore for node modules and bundled files, put in the following:
  node_modules
  bundle.js
  bundle.js.map

npm run webpack