
let mix = require('laravel-mix');

mix.sass('sass/app.scss', 'css/ace-style.css')
    .options({
        processCssUrls: false
    }); 