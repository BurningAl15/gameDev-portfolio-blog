import React from "react";
import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

export default function BlogPage() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {blogPosts.map(post => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link> - {post.date}
                    </li>
                ))}
            </ul>
        </div>
    );
}