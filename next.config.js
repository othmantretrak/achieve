/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "res.cloudinary.com", "img.youtube.com"],
  },
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx}",
          "./components/**/*.{js,jsx,ts,tsx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: ["html", "body"],
      },
    ],
  ],
  async redirects() {
    return [
      {
        source: "/cms" || "/login" || "/backend",
        destination: "https://achieve-backend.vercel.app/studio/desk",
        permanent: true,
      },
      {
        source: "/login",
        destination: "https://achieve-backend.vercel.app/studio/desk",
        permanent: true,
      },
      {
        source: "/backend",
        destination: "https://achieve-backend.vercel.app/studio/desk",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
