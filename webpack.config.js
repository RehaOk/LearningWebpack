const path = require('path');
const MiniCssExtractplugin = require('mini-css-extract-plugin');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
            },
            {
                use: [MiniCssExtractplugin.loader, 'css-loader'],
                test: /\.css$/,
            },
            {
                test: /\.(png|svg|jpg|gif|jpe?g)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: { limit: 40000 }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options:{ disable: true },
                    }    
                ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractplugin({
            filename: 'style.css'
        }),
    ]
};

module.exports = config;