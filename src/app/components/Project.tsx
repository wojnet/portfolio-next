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
            <div className="w-full max-w-[380px] min-h-[100px] flex flex-col items-center justify-start transition-all duration-300 px-[20px] py-[16px] group rounded-[28px] border border-transparent hover:border-[rgba(72,80,230,0.2)] hover:shadow-[0_12px_40px_rgba(72,80,230,0.12)] hover:-translate-y-1">
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-[217.73px] rounded-[20px] select-none mb-[35px] transition-shadow duration-300 shadow-lg group-hover:shadow-xl object-cover rendering-quality"
                />
                <section className="flex flex-col items-center">
                    <h3 className="text-center text-[24px] font-bold mb-[20px] leading-[22px] transition-colors duration-300">{ title }</h3>
                    <ReactMarkdown className="[&>p]:text-[15px] text-center m-0 [&>p]:line-clamp-[10] [&>p]:leading-[20px] [&>p]:transition-colors [&>p]:duration-300">{description}</ReactMarkdown>
                </section>
            </div>
        </Link>
    );
}

export default Skill;