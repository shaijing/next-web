import React from "react";
import { Post } from "contentlayer/generated";
import Link from "next/link";
import { getFormattedDate } from "@/lib/utils";

function List({ posts }: { posts: Post[] }) {
    return (
        <div className="space-y-4">
            {posts.map((article) => (
                <article key={article.id} className="border rounded p-4">
                    <Link key={article.id} href={article.url}>
                        <h2 className="text-xl font-semibold">
                            {article.title}
                        </h2>
                    </Link>
                    <div className="flex items-center gap-x-4">
                        <time className="text-gray-600">
                            {getFormattedDate(article.date)}
                        </time>

                        {/* <a
                                    href={article.category.href}
                                    className="items-center justify-center"
                                >
                                    <FaArchive className="inline-block mx-1" />
                                    {article.category.title}
                                </a> */}
                    </div>
                    <Link key={article.id} href={article.url}>
                        <p className="line-clamp-2">{article.body.raw}</p>
                    </Link>
                </article>
            ))}
        </div>
    );
}
export default List;
