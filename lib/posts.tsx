import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMatter } from "@/types";
import m2h from "./m2h";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsInfo() {
    //Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // console.log(fileName);
        //Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, "");

        //Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        const blogPost: PostMatter = {
            id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            tags: matterResult.data.tags,
            category: matterResult.data.categories,
            draft: matterResult.data.draft,
        };
        //Combine the data with the id
        return blogPost;
    });

    const jsonString = JSON.stringify(allPostsData);
    fs.writeFileSync(
        "./data/search.json",
        jsonString
        // (err: NodeJS.ErrnoException | null) => {
        //     if (err) {
        //         console.log("Error writing file", err);
        //     } else {
        //         console.log("Successfully wrote file");
        //     }
        // }
    );
    //Sort posts by date
    // console.log(allPostsData);
    // console.log(JSON.parse(jsonString));
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostById(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const contentHtml = await m2h(matterResult.content);

    const blogPostWithHtml: PostMatter & { contentHtml: string } = {
        id,
        title: matterResult.data.title,
        date: matterResult.data.date,
        tags: matterResult.data.tags,
        category: matterResult.data.category,
        draft: matterResult.data.draft,
        contentHtml,
    };
    //Combine the data with the id
    return blogPostWithHtml;
}

export function getPostInfoByPath(p: string) {
    const fullPath = path.join(postsDirectory, p);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    //Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents,{ excerpt: true });

    return matterResult;
}
