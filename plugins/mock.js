import Mock from 'mockjs';

Mock.mock(/\/user/, 'get', () => {
  return {
    'list|1-10': [{
      'id|+1': 1
    }]
  }
}
)

Mock.mock(/\/info/, 'post', data => {
  console.log(data)
  return {
    'list|1-10': [{
      'id|+1': 1,
      name: '@cname'
    }]
  }
}
)
