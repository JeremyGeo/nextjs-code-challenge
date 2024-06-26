/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['randomuser.me'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net"
            }
        ]
    }
};

export default nextConfig;
