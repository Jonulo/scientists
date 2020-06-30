const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader,
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin ({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        )
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: 'commons'
        }
    }
}