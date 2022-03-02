const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");
module.exports = ({ env }) => {
 const envWebpackConfig = require(`./webpack.prod.js`);
 return merge(commonWebpackConfig, envWebpackConfig);
};
