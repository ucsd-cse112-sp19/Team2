var webpack = require("webpack");

module.exports = {
    entry: __dirname + "/index.js",
    output: {
        path: __dirname + "/",
        filename: "index.bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: __dirname + "/",
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: ["babel-loader"],
        }]
    }
}