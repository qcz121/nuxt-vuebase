import utils from '../utils';

export default ({
  route, req, res, redirect,
}) => {
  const isClient = process.client;
  let redirectURL = '/login';
  let token;
  let path;
  // 在客户端判读是否需要登陆
  if (isClient) {
    token = utils.getcookiesInClient('token');
    path = route.path;
  }
  if (path) {
    redirectURL = `/login?ref=${encodeURIComponent(path)}`;
  }
  // 需要进行权限判断的页面开头
  console.log(token, 'tokentokentokentoken');
  if (!token && route.path !== '/login') {
    redirect(redirectURL);
  }

  console.log(res, req, 'resreq');
};
