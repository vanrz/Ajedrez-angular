
const proxy = [
    {
      context: '/api/*',
      target: 'http://localhost:8080',
      pathRewrite: {'^/api' : ''},
      secure: false
    }
  ];
  module.exports = proxy;