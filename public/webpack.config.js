const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: "./index.js",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    },
    mode: "development",
    plugins: [
      new WebpackPwaManifest({
        name: "Budget Tracker Application",
        short_name: "Budget Tracker",
        description: "An application that allows you to track your spending and incoming money",
        background_color: "#ffffff",
        theme_color: "#317EFB",
        "theme-color": "#317EFB",
        start_url: "/",
        icons: [{
          src: path.resolve("icons/icon-192x192.png"),
          sizes: [192, 512],
          destination: "icons"
        }]
      })
    ]
};

module.exports = config;
