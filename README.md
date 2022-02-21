# react-practicals
React Practicals - Simform Solutions

# creating an app from scratch using a flexible toolchain

- first create public and src
- run git init command
- inside public folder create a new index.html file and write code
- now we will install Babel 
    run 
     - npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0

- create a new file .babelrc and write presets 
- now we will install webpack
    npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
- now create a new file at root - webpack.config.js
- we’ll need to get two more packages: 
    -npm install react@16.5.2 
    -npm install react-dom@16.5.2
- Create a new file index.js at the root directory
- create another file in src called App.js and App.css
- now we can start our server by using npm start
