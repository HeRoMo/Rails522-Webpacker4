const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    test: /\.sass$/,
    use: [
        'vue-style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'sass-loader',
            options: {
                indentedSyntax: true
            }
        }
    ]
}