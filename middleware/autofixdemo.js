// export default function ({route, req, res, redirect}) {
//   let isClient = process.client,
//   isServer = process.server,
//   redirectURL = '/login',
//   token, path
//   console.log(isServer, 'isServer');
//   //在客户端判读是否需要登陆
//   if (isClient) {
//     token = window.localStorage.getItem('token');
//     path = route.path;
//   }

//   if (path) {
//     // redirectURL = '/login?ref=' + encodeURIComponent(path)
//     redirectURL = '/login'
//   }
//   //需要进行权限判断的页面开头
//   if (!token) {
//     redirect(redirectURL)
//   }
// }
