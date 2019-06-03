var webpack = require("webpack");
var path = require("path");
//var glob = require("glob");

/** 
 * Need to install the following packages:
 * webpack
 * webpack-dev-server
 * babel-core
 * babel-loader
 * babel-preset-env
*/
module.exports = {
    entry: {
        'core-hello': './web_components/core-hello/core-hello.js',
        'live-editor': './web_components/live-editor/live-editor.js',
        'meat-boilerplate': './web_components/meat-boilerplate/meat-boilerplate.js',
        'meat-button': './web_components/meat-button/meat-button.js',
        'meat-card': './web_components/meat-card/meat-card.js',
        'meat-input': './web_components/meat-input/meat-input.js',
        'meat-link': './web_components/meat-link/meat-link.js',
        'team2-learn': './web_components/team2-learn/team2-learn.js'
    },
    output: {
        path: path.resolve(__dirname, 'polyfills'),
        filename: "[name].js",
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
            exclude: "/node_modules/"
        }]
    }
}