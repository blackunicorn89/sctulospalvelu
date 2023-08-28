const { createProxyMiddleware } = 'http-proxy-middleware';
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*', // Pyynnöt, jotka menevät reittiin /api/
        destination: 'http://localhost:5092/api/:path*', // Backend-palvelimen osoite
      },
    ];
  },
};


