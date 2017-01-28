有通配符的放假了。搜索了一下github上的前段集成工具。gulp火热。学习一下gulp。


1、安装nodesjs。可以使用国内的npm.taobao.org. 也可以使用国外的官网安装。并且可以使用cnpm。
在windwo下安装 最新稳定版本的nodejs path系统变量会自动配置在msi文件的时候。
环境变量是当前的某个windows用户使用，系统变量是使用widnows的所有用户。
安装的时候一直next就可以了。（accept 协议）



2、安装gulp（gulp本身就是你npm的一部分）
npm install --global gulp-cli 全局安装  
或者在项目目录下安装 npm install --save-dev gulp
参考https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md


3、如何使用国内的镜像快速安装  
npm install gulp -g --registry=https://registry.npm.taobao.org  

如果以后都想使用可以修改配置项
npm config set  registry https://registry.npm.taobao.org
npm config ls 检查一下清单


4、npm升级  
建议替换source code    在github上找稳定的版本替换npm里面的所有的代码

5、npm init 初始化 配置文件

6、本地化安装gulp包 npm install gulp --save


7、创建任务：gulpfile.js是gulp的主文件
首先 加载gulp 定义一个常量
分配重复的操作
其次： 定义一个任务  gulp.task('hello',fucntion(){})name fucntion
执行  命令行执行  gulp + 任务名字


8、这是一个链接有通配符的介绍
https://github.com/isaacs/node-glob


9、基本插件
src  dest task  watch（文件监视自动执行） pipe default
http://www.gulpjs.com.cn/docs/api/

10、功能性插件
gulp不支持任何功能  利用基础功能安装插件实现功能
www.npmjs/com/pakage/*  安装的插件的名字 可以找到官方的文档
