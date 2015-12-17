var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var webserver = require('gulp-webserver');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var source = require('vinyl-source-stream');

var dirs = {
	src: './src',
	dest: './dest',
}

var path = {
  src: {
    js: {
      all: dirs.src + '/js/**/*.js',
      app: dirs.src + '/js/app.js',
    },
    html: {
      all: dirs.src + '/**/*.html',
    },
    libs: [
      'bower_components/angular/angular.js',
			'bower_components/lodash/lodash.js',
    ],
    scss: {
			all: dirs.src + '/style/**/*.scss',
      app: dirs.src + '/style/app.scss',
    },
		img: {
			all: dirs.src + '/images/**/*.*',
		}
  } ,
  dest: {
    root: dirs.dest,
    js: dirs.dest + '/js',
    css: dirs.dest + '/style',
    html: dirs.dest,
		img: dirs.dest + '/images',
  },  
}

gulp.task('clean', function () {
  del.sync([path.dest.root + '/*']);
});

gulp.task('html', function() {
  return gulp.src(path.src.html.all)
    .pipe(gulp.dest(path.dest.html))
})

gulp.task('html:watch', ['html'], function() {
  gulp.watch(path.src.html.all, ['html'])
})

gulp.task('webserver', function() {
  gulp.src(path.dest.root)
    .pipe(webserver({
      livereload: true,
      port:9090,
      directoryListing: {
        enable:true,
        path:path.dest.root,
      },
      open: true,
    }));
});

gulp.task('js', function() {
	return gulp.src(path.src.js.all)
    .pipe(sourcemaps.init())
    .pipe(concat('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.js));
})

gulp.task('js:watch', ['js'], function() {
  gulp.watch(path.src.js.all, ['js'])
})

gulp.task('libs', function() {
  return gulp.src(path.src.libs)
    .pipe(sourcemaps.init())
    .pipe(concat('libs.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.js))
})

gulp.task('styles', function () {
  return gulp.src(path.src.scss.app)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.dest.css));
});

gulp.task('styles:watch', ['styles'], function() {
  gulp.watch(path.src.scss.all, ['styles']);
});

gulp.task('images', function () {
	return	gulp.src(path.src.img.all)
		.pipe(gulp.dest(path.dest.img));
});

gulp.task('build', ['libs', 'html', 'js', 'styles', 'images']);

gulp.task('serve', ['html:watch', 'js:watch', 'styles:watch', 'webserver']);

var config = {
    server: {
        baseDir: "./dest"
    },
    tunnel: true,
    host: 'localhost',
    port: 9090,
    logPrefix: "Frontend-dev"
};

var browserSync = require("browser-sync");
var reload = browserSync.reload;

gulp.task('webserverG', function () {
    browserSync(config);
});