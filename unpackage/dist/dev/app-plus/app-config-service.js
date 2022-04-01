
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/vaction/vaction","pages/service/service","pages/user/user","pages/userInfo/userInfo","pages/wechatLogin/wechatLogin","pages/appLogin/appLogin"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"backgroundColor":"#fff","borderStyle":"white","list":[{"pagePath":"pages/index/index","iconPath":"static/logo/index.png","selectedIconPath":"static/logo/index_sc.png","text":"主页"},{"pagePath":"pages/vaction/vaction","iconPath":"static/logo/vaction.png","selectedIconPath":"static/logo/vaction_sc.png","text":"休假"},{"pagePath":"pages/service/service","iconPath":"static/logo/tools.png","selectedIconPath":"static/logo/tools_sc.png","text":"服务"},{"pagePath":"pages/user/user","iconPath":"static/logo/user.png","selectedIconPath":"static/logo/user_sc.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"student","compilerVersion":"3.3.13","entryPagePath":"pages/user/user","entryPageQuery":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"主页"}},{"path":"/pages/vaction/vaction","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"请假","enablePullDownRefresh":false}},{"path":"/pages/service/service","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"服务","enablePullDownRefresh":false}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationStyle":"custom","titleView":false}},{"path":"/pages/userInfo/userInfo","meta":{},"window":{"navigationBarTitleText":"修改个人信息","enablePullDownRefresh":false}},{"path":"/pages/wechatLogin/wechatLogin","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#97d9e1"}},{"path":"/pages/appLogin/appLogin","meta":{},"window":{"navigationBarTitleText":"登录","enablePullDownRefresh":false,"navigationBarBackgroundColor":"#97d9e1"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
