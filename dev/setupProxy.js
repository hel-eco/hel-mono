const { createProxyMiddleware } = require('http-proxy-middleware');

// your proxy host
const proxyHost = 'https://hel.woa.com';

module.exports = function (app) {
  const proxyPath = (path, target = proxyHost, pathRewrite) => {
    app.use(path, createProxyMiddleware({
      target,
      secure: false,
      changeOrigin: true,
      pathRewrite,
    }));
  };
  proxyPath('/openapi');
};
