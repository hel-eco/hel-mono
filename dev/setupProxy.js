const { createProxyMiddleware } = require('http-proxy-middleware');

// your proxy host
const proxyHost = 'https://helmicro.com';

function makeProxyFn(app) {
  const proxyFn = (path, target = proxyHost, pathRewrite) => {
    app.use(path, createProxyMiddleware({
      target,
      secure: false,
      changeOrigin: true,
      pathRewrite,
    }));
  };

  return proxyFn;
}

module.exports = function (app) {
  const proxy = makeProxyFn(app);
  proxy('/openapi');
};
