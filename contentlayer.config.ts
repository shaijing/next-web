// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
// import rehypeMathJaxSvg from "rehype-mathjax/svg.js";
import rehypeMathjaxChtml from "rehype-mathjax/chtml.js";
import readingTime from "reading-time";
import { parseISO, format } from "date-fns";

import { excludeSpecial } from "./lib/utils";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: `**/*.md`,
    contentType: "markdown",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        date: {
            //写作日期
            type: "date",
            description: "The date of the post",
            required: true,
        },
        draft: {
            //是否草稿
            type: "boolean",
            description: "Draft posts are only visible in preview mode",
            required: true,
        },
        tags: {
            //标签
            type: "string",
            description: "Tags for the post",
            required: true,
        },
        categories: {
            //分类
            type: "string",
            description: "Categories for the post",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) =>
                `/posts/${post._raw.sourceFileName.replace(/\.md$/, "")}`,
        },
        path: {
            type: "string",
            resolve: (post) => `/posts/${post._id}`,
        },
        id: {
            type: "string",
            resolve: (post) => post._raw.sourceFileName.replace(/\.md$/, ""),
        },
        tags: {
            type: "list",
            resolve: (post) => post.tags.split(",").map((tag) => tag.trim()),
        },
        categories: {
            type: "list",
            resolve: (post) =>
                post.categories.split(",").map((category) => category.trim()),
        },
        publishedAt: {
            type: "string",
            resolve: (post) => format(parseISO(post.date), "MMM dd, yyyy"),
        },
        readingTime: {
            type: "string",
            resolve: (post) => readingTime(post.body.raw).text,
        },
        wordCount: {
            type: "number",
            resolve: (post) => post.body.raw.split(/\s+/gu).length,
        },
    },
}));

// defineDocumentType(() => ({
//   name: 'About',
//   filePathPattern: `about.mdx`,
//   // ...
// }))

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    markdown: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: "one-dark-pro",
                    onVisitLine(node: { children: string | any[] }) {
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightLine(node: {
                        properties: { className: string[] };
                    }) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightWord(node: {
                        properties: { className: string[] };
                    }) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            rehypeCodeTitles,
            [
                rehypePrism,
                {
                    showLineNumbers: true,
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["anchor"],
                    },
                },
            ],
            [
                rehypeMathjaxChtml,
                {
                    chtml: {
                        fontURL:
                            "https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2",
                    },
                },
            ],
        ],
    },
});
