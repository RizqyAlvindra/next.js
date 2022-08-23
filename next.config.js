/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      "/": { page:"/" }
    };
  },
  images: {
    loader: 'akamai',
    path: '',
  }
}
