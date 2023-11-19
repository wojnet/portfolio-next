import { FC } from "react";
import { getPostData } from "@/app/utils/getPostData";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const Post: FC<any> = async ({ params }: { params: { postName: string }}) => {
    const postData = await getPostData(params.postName);

    const { 
        creationDate, 
        postAuthor, 
        postImage, 
        postSummary, 
        title, 
        postContent
    } = postData.items[0].fields;

    const localDate = new Date(creationDate).toLocaleString();

    return (
        // PostPage--Wrapper
        <div className="w-full h-full flex flex-col">
            <h1 className="text-center text-4xl font-bold my-[40px]">
                { title }
            </h1>
            <p className="">
                { postSummary }
            </p>
            <section className="flex gap-3 opacity-60 my-6">
                <p className="before:content-['👤'] text-xs">
                    { postAuthor }
                </p>
                <p className="text-xs">
                    { localDate }
                </p>
            </section>
            <img
                src={postImage.fields.file.url}
                alt={postImage.fields.file.fileName}
                className="max-w-full rounded-3xl shadow-md" 
            />
            <div className="[&>h1]:text-[32px] [&>h1]:leading-9 [&>h1]:font-bold [&>h1]:my-8 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:my-8 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:my-8 [&>p]:my-8 [&_code]:bg-slate-200 [&_code]:p-[1px_3px] [&_code]:rounded-md [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:opacity-70 [&_ol]:list-disc [&_ol]:pl-5 [&_ol]:opacity-70">
                { documentToReactComponents(postContent, {
                    renderNode: {
                        [INLINES.HYPERLINK]: node => {
                            const tempNode: any = node;
                            return <a href={tempNode.data.uri} target="_blank" className="underline">{tempNode.content[0].value}</a>
                        },
                        [BLOCKS.HR]: () => <p className="w-full h-[1px] text-centerpb-5"></p>,
                        [BLOCKS.EMBEDDED_ASSET]: node => {
                            return <img
                                className="rounded-xl shadow-md"
                                src={node.data.target.fields.file.url}
                                alt={node.data.target.fields.file.fileName}
                            />
                        }
                    }
                }) }
            </div>
        </div>
    );
}

export default Post;