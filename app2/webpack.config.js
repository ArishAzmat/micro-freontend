const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require("webpack").container;
const path = require('path')

const deps = require("./package.json").dependencies;

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname,'src/bootstrap.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        clean:true,
        assetModuleFilename: '[name][ext]'
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port:'3000',
        open :true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets:[
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ]
                    }
                }
            },
            {
                test:/\.(png|svg|jpg|jpeg|gif)$/,
                type:'assets/resources',
            },
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            remotes: {
              app1: `app1@http://localhost:3001/remoteEntry.js`,
              store:'store@http://localhost:8000/remoteEntry.js'
            },
            shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
              },
          }),
        new HtmlWebpackPlugin({
            title:'webpack app',
            filename:'index.html',
            template:'src/index.html'
        })
    ]

}