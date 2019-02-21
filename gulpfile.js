//这个JavaScript文件写的就是gul该完成的功能代码

let gulp = require("gulp");//引入gulp文件，相当于script标签

//写复制文件的任务
gulp.task("copy-index",async ()=>{
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\BOLON"));
});