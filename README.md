<p align="center">
	<img alt="logo" width="80" src="https://img-blog.csdnimg.cn/f175e8d454a24b588726290b74a317c8.png">
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
3. 休假通知：休假后会微信订阅消息提醒对应辅导员，审批后通知休假时间上课老师。
4. 用户登录：账号由后台系统管理，支持微信登录，首次登录需要绑定账号。
5. 支持双端：App端支持微信登录及账号登录，小程序端使用openid绑定登录。
6. 用户信息：用户可修改自己的信息，也可以通过web后台系统更改。
7. 查看休假：学生可查看自己的历史休假单，老师可以查看本院系休假单等。
8. 上课通知：学生到达上课时间，会提前使用微信订阅消息通知。
9. 其他功能：待完善....


## 演示图

<table>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/370a45286a614260996cfdde9f02ca72.jpeg"/></td>
        <td><img src="https://img-blog.csdnimg.cn/3db8a522a4e844b4b965aa536c01c3db.jpeg"/></td>
    </tr>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/7f722e3a99cb49bfaaaf5d44daa97d56.jpeg"/></td>
        <td><img src="https://img-blog.csdnimg.cn/a974ff34e662409f89af5d50baa97f6f.jpeg"/></td>
    </tr>
    ​<tr>
        <td><img src="https://img-blog.csdnimg.cn/0f43ed320a8c436f96a8cba333a1fe5b.jpeg"/></td>
        <td><img src="https://img-blog.csdnimg.cn/122dcee613f24477a2733fcb2c48d3dc.png"/></td>
    </tr>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/5063f5ff3a80495cb0dc884b8ac5f71a.png"/></td>
        <td><img src="https://img-blog.csdnimg.cn/e82097be35784200ab428c3a9635f3cd.png"/></td>
    </tr>
    <tr>
        <td><img src="https://img-blog.csdnimg.cn/ee43cf7b25ae4134993364894ebb214f.jpeg"/></td>
        <td><img src="https://img-blog.csdnimg.cn/d87c69976c1645a28ea63689874df17b.jpeg"/></td>
    </tr>
</table>
