:date:05-21

**前后端整合实验-vue前端**

疑问

1. `Promise.reject(error)`

2. 为何重新组织了`src`的目录结构

   App.vue有多个了，每个起什么样的作用

   登录页面为何用`login.html`而不是`login.vue` 

   已经有了App.vue，那login.html有什么用呢

3. `login.js`里，token已经包含了aid，为何还要多用一个role?

   `window.location.href = "./index.html"`此处`./` 代表什么路径

   login.js放的是登录的业务逻辑

4. `login/App.vue`里`form ref="login"`

5. xxx.$route.xxx，为何要加美元符，什么情况加，什么情况不加

6. `Main.js`里，axios发请求时，模板字符串外面不用加双引号

7. 嵌套路由的作用和实现

8. 同级多router-view路由是什么意思

9. 多页面的设置

   每个页面为啥还有一个template文件

10. `course.vue`里props的用法

收获：

**前后端整体业务逻辑**：`login/App.vue`为登录页面，输入用户名和密码登录，调用`login.js`中的login方法，方法中判断响应头（因此这时后端中的`logincontroller`中应该在登录判断成功之后给响应体加上这俩属性）中是否有token和role（判断管理员权限用），如果有则将这两个存到session里并转到用户的主页，若没有，则清空输入框。

在用户访问/api下的资源时，首先经过axios的请求拦截器，自动在请求头加上token（:question:之后token都是从session身上获得，请求头加上token有什么必要呢）。

这时进入`main/main.js(入口)`时，从session中取出token和role，若token不存在则打回登录页面，若token存在，判断role来决定是否显示添加课程的按钮`addcoursebutton`

**前端结构**

多页面：`login`和`main`

其中这两个目录下的`/api/login.js`和`./api/Main.js`负责发送axios请求，封装的是业务逻辑方法，

拦截器：请求拦截器：可用于在每个请求中添加token等信息

​	响应拦截器：可用于通过状态码判断响应结果，完成异常等操作

sessionStorage保存token

嵌套路由