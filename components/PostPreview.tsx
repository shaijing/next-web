"use client"
import { getFormattedDate, chunk } from "@/lib/utils";
import { allPosts, Post } from "contentlayer/generated";
import Link from "next/link";
import React, { useState } from "react";
import List from "./List";
import Pagination from "./pagination/Pagination";
export default function PostPreview() {
    const posts = allPosts.sort((a: Post, b: Post) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    const total_post = posts.length;
    const default_page_size = 3;
    const current_page = 1;
    const [dataSource, setLists] = useState(
        chunk(posts, default_page_size)[current_page - 1]
    );
    // console.log(dataSource);
    // const info = getPostInfoByPath("git.md");
    // console.log(info)
    return (
        <>
            <div className="max-w-3xl mx-auto p-4">
                <h1 className="text-3xl font-semibold mb-4">My Posts</h1>

                <List posts={posts} />
                {/* <Pagination
                    total={total_post}
                    currentPage={current_page}
                    pageSize={default_page_size}
                    onChange={(current) => {
                        // 页码改变时，重新设置当前的分页数据
                        setLists(chunk(posts, default_page_size)[current - 1]);
                    }}
                /> */}
            </div>
        </>
    );
}
