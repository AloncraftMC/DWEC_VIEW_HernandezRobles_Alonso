const path = require('path');

module.exports = {
    entry: './SGAEA/Tarea_4_5/main.js',
    output: {
        path: path.resolve(__dirname, './SGAEA/Tarea_4_5/dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    corejs: 3,
                                },
                            ],
                        ],
                    },
                },
            },
        ],
    },
    mode: 'production',
};