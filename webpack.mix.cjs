const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        // Additional postCSS configuration if needed
        require("tailwindcss"),
    ]).webpackConfig({
        module: {
           rules: [
              {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: {
                    loader: 'babel-loader',
                 },
              },
           ],
        },
     }).disableNotifications();
