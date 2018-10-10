
let mix = require('laravel-mix');
let font = require('laravel-mix');

mix.sass('sass/app.scss', 'css/ace-style.css')
    .options({
        processCssUrls: false
    }); 

font.sass('node_modules/pixeden-stroke-7-icon/pe-icon-7-stroke/scss/pe-icon-7-stroke.scss','css/picon-7.css',{
        // outputStyle: 'compressed'
    })
    .options({
        processCssUrls: true
    }); 