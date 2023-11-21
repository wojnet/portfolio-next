import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import ReactMarkdown from "react-markdown";

interface ProjectProps {
    imageSrc: string;
    imageAlt: string;
    url: string;
    title: string;
    description: string;
    inDevelopment?: boolean;
}

const Skill: FC<ProjectProps> = ({ imageSrc, imageAlt, url, title, description, inDevelopment }) => {
    return (
        <Link href={url} target="_blank">
            <div className="w-full max-w-[380px] min-h-[100px] flex flex-col items-center justify-start hover:scale-[0.98] transition px-[20px] group">
                <Image 
                    src={imageSrc}
                    alt={imageAlt}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-auto rounded-[20px] select-none mb-[35px] transition shadow-lg"
                />
                <section className="flex flex-col items-center">
                    <h3 className="text-center text-[24px] font-bold mb-[20px] leading-[22px] group-hover:text-color-2 transition">{ title }</h3>
                    <ReactMarkdown className="[&>p]:text-color-1 [&>p]:text-[15px] text-center m-0 [&>p]:line-clamp-[10] [&>p]:leading-[20px] [&>p]:group-hover:text-color-4 [&>p]:transition">{description}</ReactMarkdown>
                </section>
            </div>
        </Link>
    );
}

export default Skill;