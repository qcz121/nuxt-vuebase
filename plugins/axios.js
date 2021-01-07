export default ({ redirect, $axios }) => {
  $axios.onResponse(res => {
    // 统一处理错误
    console.log(res, 'res')
    if (res.data.code !== 0) {
      if (res.data.code === 1) {
        // 重定向到 login 页
        redirect('/login')
      }
    } else {
      return res.data
    }
  });

  $axios.onError(error => {
    console.log(error)
    // switch (error.response.status) {
    //   case 403:
    //     // 重定向到 403 页
    //     redirect('/error/403')
    //     break;
    //   case 404:
    //     // 重定向到 404 页
    //     redirect('/error/404')
    //     break;
    //   case 500:
    //     // 重定向到 500 页
    //     redirect('/error/500')
    //     break;
    //   default:
    //     break;
    // }
  })
};
