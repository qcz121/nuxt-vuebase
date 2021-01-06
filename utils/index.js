import Cookie from 'js-cookie';

export default {
  // 获取客户端cookie
  getcookiesInClient: (key) => (Cookie.get(key) ? Cookie.get(key) : ''),
};
