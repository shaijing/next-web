/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // assetPrefix:'./',
    // distDir: "build",
    // output: "export",
    // async headers() {
    //     return [
    //         {
    //             source: "/(.*)",
    //             headers: securityHeaders,
    //         },
    //     ];
    // }
};

module.exports = withContentlayer(nextConfig);

const securityHeaders = [
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
    // {
    //   key: 'Content-Security-Policy',
    //   value: ContentSecurityPolicy.replace(/\n/g, '')
    // },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    {
        key: "Referrer-Policy",
        value: "origin-when-cross-origin",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    {
        key: "Strict-Transport-Security",
        value: "max-age=31536000; includeSubDomains; preload",
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
    },
];
