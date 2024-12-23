import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";

// This is a server component
export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound(); // If no post is found
    }

    return (
        <div>
            <h1>{post?.title}</h1>
            <p><em>{post?.date}</em></p>
            <div>{post?.content}</div>
        </div>
    );
}