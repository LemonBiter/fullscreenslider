const path = require('path');
module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"), // string
        // 所有输出文件的目标路径
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|git)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        // publicPath: '/images'
                    },
                }]


            }
        ]
    }
};