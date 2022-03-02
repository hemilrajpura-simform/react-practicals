const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");
module.exports = ({ env }) => {
 const envWebpackConfig = require(`./webpack.dev.js`);
 return merge(commonWebpackConfig, envWebpackConfig);
};
