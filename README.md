# 搭建过程

React SSR的关键是同构，同构意味着一套代码既在服务端执行，又在客户端执行，所以所有的努力都是要保证在两端都可执行。

## 要点

- 路由不同. 客户端的spa是根据history来定位view的（history的改变并不刷新页面），而SSR需要根据location来的
- 数据预取. SSR的一个流程是preload data.
- 渲染函数不同. spa用render渲染,ssr用renderToString渲染
- 可以用Redux管理数据
