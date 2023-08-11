import localFont from "next/font/local";

export const SITE_NAME = "Ling's Blog";
export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
export const SITE_URL = "https://shaijing.github.io";
export const SITE_ICO = "https://shaijing.github.io/favicon.ico";
export const MY_NAME = "Ling Yu";
export const MY_EMAIL = "yulingsc@outlook.com";
export const MY_GITHUB = "https://github.com/shaijing";
export const MY_ICO = "/images/favicon.ico";
export const headerNavLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Posts",
        href: "/posts",
    },
    {
        title: "About",
        href: "/about",
    },
];

export const fonts = localFont({
    src: [
        {
            path: "../public/fonts/cantarell-regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../public/fonts/cantarell-bold.woff2",
            weight: "700",
            style: "bold",
        },
        {
            path: "../public/fonts/cantarell-extrabold.woff2",
            weight: "800",
            style: "extrabold",
        },
    ],
});
