'use-strict'
const path = require('path');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './lib'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: 'private-route-react',
        publicPath: '/lib/',
        umdNamedDefine: true,
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
            'react-router-dom': path.resolve(__dirname, './node_modules/react-router-dom')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom": {
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "ReactDOM",
            root: "ReactDOM"
        },
        "react-router-dom": {
            commonjs: "react-router-dom",
            commonjs2: "react-router-dom",
            amd: "ReactRouterDOM",
            root: "ReactRouterDOM"
        }
    }
}