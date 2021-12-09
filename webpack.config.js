const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports={
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [new HTMLWebpackPlugin({
            template: path.resolve(__dirname,'public/index.html'),
            filename: "index.html",
        }
    )],
    devServer: {
        historyApiFallback :true,
        port:3001,
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: './components/assets/img/[name].[ext]',
                },
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(s[ac]ss|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]

            },
        ]
    },

    resolve: { extensions: ['*', '.js', '.jsx', '.scss', '.css'] },
}