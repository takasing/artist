"use strict"

var webpack = require("webpack");

var argv = require("minimist")(process.argv.slice(2));

var src = "./src";
var dest = "./public"

module.exports = {
    watch: !!(argv.w),
    dirs: {
        src: src,
        dest: dest
    },
    cssnext: {
        src: {
            pc: src + "/style/pc/index.css",
            sp: src + "/style/sp/index.css"
        },
        dest: {
            pc: dest,
            sp: dest + "/sp"
        }
    },
    webpack: {
        entry: src + "/js/app.js",
        output: {
            filename: "bundle.js"
        },
        resolve: {
            extensions: ["", ".js"]
        },
        module: {
            loaders: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel?presets[]=es2015"
            }]
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ]
    },
    image: {
        src: "src/image/**/*",
        dest: dest + "/image"
    }
};
