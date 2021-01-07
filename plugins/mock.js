import Mock from 'mockjs';
Mock.mock(/\/login/, 'post', (options) => {
  console.log(options, '1')
  let { body } = options;
  body = JSON.parse(body);
  let nickname = Mock.Random.cname()
  return {
    code: 0,
    data: {
      username: body.username,
      nickname,
      token: Mock.Random.character('lower'),
      imageUrl: Mock.Random.image('128x128', '#fff', nickname),
      userId: Mock.Random.guid()
    },
    msg: '成功'
  }
});
Mock.mock(/\/getCatelog/, 'post', (options) => {
  console.log(options, '1')
  let { body } = options;
  body = JSON.parse(body);
  let nickname = Mock.Random.cname()
  return {
    code: 0,
    data: {
      list: [{
        name: '首页',
        path: '/',
        iconName: 'el-icon-house',
        index: '1'
      }, {
        name: '样例',
        path: '/demo',
        iconName: 'el-icon-ice-tea',
        index: '2',
        children: [{
          name: '表格',
          path: '/demo/table',
          index: '2-1'
        }, {
          name: '表单',
          path: '/demo/form',
          index: '2-2'
        }]
      }]
    },
    msg: '成功'
  }
});
