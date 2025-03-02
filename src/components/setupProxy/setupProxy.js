// import { createProxyMiddleware } from 'http-proxy-middleware';
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/google-maps-api', // 첫 번째 API의 경로
        createProxyMiddleware({
            target: 'https://maps.googleapis.com', // Google Places API 서버 주소
            changeOrigin: true,
            pathRewrite: {
                '^/google-maps-api': '/maps/api/place/nearbysearch', // '/google-maps-api'를 실제 Google API 경로로 변경
            },
        })
    );

    app.use(
        '/korea-tour-api',
        createProxyMiddleware({
            target: 'http://apis.data.go.kr',
            changeOrigin: true,
            pathRewrite: (path) => path.replace('/korea-tour-api', '/B551011/KorService1/searchFestival1'),
        })
    );
};



   


