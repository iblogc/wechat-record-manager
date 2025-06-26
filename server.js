const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const PORT = 8080; // 我们的代理服务运行的端口
const API_TARGET = 'http://127.0.0.1:5030/api'; // 目标 chatlog API 地址

// 1. 设置 API 代理
// 所有发往 /api 的请求都会被转发到 API_TARGET
app.use('/api', createProxyMiddleware({
    target: API_TARGET,
    changeOrigin: true, // 必须设置为 true，否则代理可能会失败
    // 可选：如果 chatlog API 的路径本身不包含 /api，可以用 pathRewrite 去掉它
    pathRewrite: {
      '^/api': '/api', 
    },
}));

// 2. 托管前端静态文件
// 使用 path.join 来确保跨平台路径的正确性
app.use(express.static(path.join(__dirname)));

// 默认根路径返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`Frontend and Proxy server is running on http://localhost:${PORT}`);
    console.log(`Now open your browser and go to http://localhost:${PORT}`);
});