/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "utfs.io",
                port: "",
                pathname: "/**"
            }
        ]
    },
    env: {
        nodeEnv: "development",
        contentfulSpace: "owr99aagca52",
        contentfulEnvironment: "master",
        contentfulAccessToken: "NlDIQfqUNCBjZbn47_sr13XQyquwHlLY2mgBWqY_p1M",
    }
}

module.exports = nextConfig
