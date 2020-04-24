const { src, dest, watch }= require(`gulp`);
const htmlCompressor  = require (`gulp-htmlmin`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compressHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`compressed-html/`));
};
let compressJS = () => {
    return src(`js*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`compressed-scripts`));
};
let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 0, // A delay is sometimes helpful when reloading at the
        server: {       // end of a series of tasks.
            baseDir: [
                `html`,
                `/.html`
            ]
        }
    });

    watch(`html/**/*.html`).on(`change`, reload);
};

exports.compressHTML = compressHTML;
exports.compressJS = compressJS;
exports.serve = serve;
