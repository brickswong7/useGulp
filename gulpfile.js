/*
* @date2017 -1 28
* @author bricks
*/

'use strict'
// load gulp 
const gulp = require('gulp');
// gulp deal width progresses the same
// make the same progresses  into different tasks;

// how to define a tasks
// taks gulp's a function params:name cotent(function)
gulp.task('hello',function(){
	console.log('hello bricks')
	//code same progess

})

//run task
// cmd

//copy files src > dest
gulp.task('dest',function(){
	// src file
	//pipe 管道 =》压缩 编码
	gulp.src('src/index.html')
		.pipe(gulp.dest('dest/'));
})


// DEFAULT
gulp.task('default',function(){
	//watch files changes run dest
	gulp.watch('src/*',['dest']);
})

const less = require('gulp-less');
//plugiuns apply
gulp.task("style",function(){
	gulp.src("src/**/*.less")
	.pipe(less())
	.pipe(gulp.dest("dest/"))
})

//npm install gulp-connect --save
//define a  http task
const connect = require('gulp-connect')
// watch 8080 port default
gulp.task('serve',function(){
	connect.server({
	    root: 'app',
	    livereload: true
	 });

	gulp.watch("public/**/*.*",['reload'])
})

gulp.task('reload',function(){
	gulp.src('public/**/*.*')
	.pipe(connect.reload())
})