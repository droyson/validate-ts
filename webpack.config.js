const path = require('path');

const webConfig = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Validate',
        libraryTarget: 'umd'
    }
};

const serverConfigExtension = {
    output: {
        filename: 'index.node.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Validate',
        libraryTarget: 'umd'
    }
    , target: 'node'
};

const serverConfig = Object.assign({}, webConfig, serverConfigExtension);

module.exports = [webConfig, serverConfig];
