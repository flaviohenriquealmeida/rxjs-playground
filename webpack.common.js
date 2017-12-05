const path = require('path')
    ,HtmlWebpackPlugin = require('html-webpack-plugin')
    ,webpack = require('webpack')
    ,extractTextPlugin = require('extract-text-webpack-plugin');
    
    

module.exports = {
    entry: {
        app: './src/app.js',
        vendor: ['rxjs', 'bootstrap']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { 
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'file-loader' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml' 
            }            
        ]
    },
    plugins: [
        new extractTextPlugin("styles.css"), 
        new webpack.ProvidePlugin({
            $: 'jquery/dist/jquery.js',
            jQuery: 'jquery/dist/jquery.js'
        }),
        new webpack.optimize.CommonsChunkPlugin(
            { 
                name: 'vendor', 
                filename: 'vendor.bundle.js'
            }
        ),
        new HtmlWebpackPlugin({
            hash: true,    
            filename: 'index.html',
            template: __dirname + '/main.html',
        })
    ]
};



