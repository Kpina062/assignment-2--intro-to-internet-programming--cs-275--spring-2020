const { src, dest, series, watch }= require(`gulp`);
const htmlCompressor  = require (`gulp-htmlmin`);
const jsCompressor = require(`gulp-uglify`);
const babel = require(`gulp-babel`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require(`gulp-uglifycss`);
const jsLinter = require(`gulp-eslint`);
const htmlValidator = require(`gulp-html`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let compressHTML = () => {
    return src([`html/*.html`, `html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let validateHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlValidator());
};

let compressJS = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src (`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe( dest(`prod/js`));
};

let compressCSS = () => {
    return src ([`css/*.css`,`css/**/*.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe( dest(`temp/css`));
};

let transpileCSSForProd = () => {
    return src ([`css/*.css`,`css/**/*.css`])
        .pipe(cssCompressor({collapseWhitespace: true}))
        .pipe( dest(`prod/css`));
};


let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
};
let lintJS = () => {
    return src (`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`, process.stderr));
};
let serve = () => {
    browserSync({
        server: {
            baseDir: [
                `html`,
                `temp`

            ]
        }
    });
    watch([`html/**/*.html`,`js/*.js`, `css/*.css`]) .on(`change`, reload);
};
exports.serve = series(lintJS, transpileJSForProd, validateHTML, serve);
exports.compressHTML = compressHTML;
exports.validateHTML = validateHTML;
exports.compressJS = compressJS;
exports.transpileJSForProd = transpileJSForProd;
exports.transpileCSSForProd = transpileCSSForProd;
exports.compressCSS= compressCSS;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.build = series (
    compressCSS,
    compressHTML,
    transpileJSForProd,
    transpileCSSForProd,
);
exports.serve = serve;
