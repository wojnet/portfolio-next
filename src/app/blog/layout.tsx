import { Metadata } from "next";
import { Suspense } from "react";
import PostTileSkeleton from "../components/PostTileSkeleton";

export const metadata: Metadata = {
    title: "Wojciech Glid - Blog",
    description: 'Generated by create next app',
}

const LoadingPosts =
    <div className="w-full flex justify-center flex-wrap gap-[50px] px-[50px] mb-[50px]">
        {[...Array(2)].map((_, i) => <PostTileSkeleton key={i} />)}
    </div>


export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="w-full max-w-[1000px] min-h-[calc(100vh-200px)] flex flex-col items-center gap-[50px] mt-[50px]">
            <div className="flex flex-col items-center">
                <h1 className="text-5xl font-bold select-none mb-5">BLOG</h1>
                <p className="w-full max-w-[300px] text-color-1 text-center">
                    It&apos;s my blog in which I&apos;m writing about different WEBDEV things that I&apos;m finding interesting. Let&apos;s&nbsp;read!
                </p>
            </div>
            <Suspense fallback={LoadingPosts}>
                { children }
            </Suspense>
        </div>
    );
}