import Cookies from 'js-cookie';

export default ({
  route, redirect,
}) => {
  const isClient = process.client;
  let redirectURL = '/login';
  let token;
  let path;
  // 在客户端判读是否需要登陆
  if (isClient) {
    token = Cookies.get('token') || '';
    path = route.path;
  }
  if (path) {
    redirectURL = `/login?ref=${encodeURIComponent(path)}`;
  }
  // 需要进行权限判断的页面开头
  if (!token && route.path !== redirectURL) {
    redirect(redirectURL);
  }
};
