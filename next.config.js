module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/trends/repos',
        permanent: true,
      },
    ];
  },
};
