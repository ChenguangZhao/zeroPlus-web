#### 第三方登录流程

##### 判断是否已登录
- 页面刷新，请求后端接口
- 后端接口从session读取user信息并返回
- 判断后端接口是否返回正确的user信息
- 正确则认为已登录状态，否则认为未登录状态

##### 已登录
- 将后端返回的user信息放入state中

###### 未登录
- 跳转到登录页面
- 提供多种第三方登录方式
- 成功从第三方登录按钮登录
- 请求后端接口，将成功登录后读取到的user信息传递到后端
- 后端收到请求，再进行安全性验证
- 验证通过将user放入session
- 跳转到登录前的页面
