<p align="center">
	<img alt="logo" width="80" src="https://gitee.com/donghe-li/images/raw/master/student-mangement/logo.png">
</p>
<h1 align="center" style="margin: 30px 0 30px; font-weight: bold;">ixh学生管理系统</h1>
<h4 align="center">基于 SpringBoot + Uniapp + uView2 移动端休假助手</h4>

## 系统简介

小团队开发系统

- 前端采用 Uniapp、uView2。
- 响应式布局 全局采用百分比或rpx布局，支持ipad及各大小屏幕适配
- 权限认证使用 Jwt，支持多终端认证系统，与web后台系统相同。
- 接口统一封装，便携管理，错误信息统一执行。
- 与之对应的web后台系统（[Vue2 + ElementUi](https://gitee.com/donghe-li/student-management)）。

## 特色功能

1. 休假功能：专门针对于学生休假，提供便捷休假。
2. 休假审批：老师及以上角色拥有审批权限，可在移动端或web后台系统审批。
3. 休假通知：学生休假后会以微信订阅消息提醒对应辅导员，审批后通知休假时间上课的老师。
4. 用户登录：账号由后台系统管理，支持微信登录，首次登录需要绑定账号。
5. 支持双端：App端支持微信登录及账号登录，小程序端使用openid绑定登录。
6. 用户信息：用户可修改自己的信息，也可以通过web后台系统更改。
7. 查看休假：学生可查看自己的历史休假单，老师可以查看本院系休假单等。
8. 上课通知：学生到达上课时间，会提前使用微信订阅消息通知。
9. 其他功能：待完善....


## 演示图

<table>
    <tr>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/login.jpg"/></td>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/login3.jpg"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/login1.jpg"/></td>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/login2.jpg"/></td>
    </tr>
    ​<tr>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/info.png"/></td>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/other.jpg"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/vacation1.png"/></td>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/vacation2.png"/></td>
    </tr>
    <tr>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/tongzhi.jpg"/></td>
        <td><img src="https://gitee.com/donghe-li/images/raw/master/student-mangement-mobile/shenpi.png"/></td>
    </tr>
</table>
