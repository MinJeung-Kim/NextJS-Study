/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  async redirects() {
    return [
      {
        // 영원히 삭제된 페이지 접근시.
        source: "/products/deleted_forever",
        // products페이지로 이동.
        destination: "/products",
        // status : 308
        permanent: true,
      },
      {
        // 임시 삭제된 페이지 접근시.
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
