/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // "Cite me, don't train on me" — blocks AI training ingest while keeping indexing + citations
          { key: "X-Robots-Tag", value: "noai, noimageai" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: "/pricing", destination: "/products", permanent: true },
    ]
  },
}

export default nextConfig
