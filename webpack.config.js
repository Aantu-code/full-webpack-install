const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/scripts/index.js',
    output: {
        filename: 'bundle.js',
     
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    devServer:{
        port: 2222,
        open: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                        "plugins": ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader",
                    "sass-loader",
                ],
              },
              {
                test: /\.html$/i,
                use:{
                    loader:"html-loader"
                } 
              }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
}