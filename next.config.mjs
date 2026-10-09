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
      { source: "/buy", destination: "/pricing", permanent: false },
      { source: "/checkout", destination: "/pricing", permanent: false },
      { source: "/upgrade", destination: "/pricing", permanent: false },
      { source: "/plans", destination: "/pricing", permanent: false },
    ]
  },
}

export default nextConfig
