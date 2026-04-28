import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PostTileProps {
    title: string;
    summary: string;
    imageSrc: string;
    imageAlt: string;
    postId?: string;
    author: string;
    creationDate: string;
}

const PostTile: FC<PostTileProps> = ({ title, summary, imageSrc, imageAlt, author, creationDate }) => {
    const localCreationDate = new Date(creationDate).toLocaleDateString("en-EN", { day: "2-digit", month: "long", year: "numeric" });

    return (
        <Link href={`/post/${title.replaceAll(" ", "_")}`}>
            <div className="w-full h-auto flex flex-col items-center cursor-pointer p-[16px] transition-all duration-300 group rounded-[28px] border border-transparent hover:border-[rgba(72,80,230,0.2)] hover:shadow-[0_10px_36px_rgba(72,80,230,0.1)] hover:-translate-y-1">
                <div className="w-full aspect-[4/3] sm:aspect-[6/5] lg:aspect-square relative mb-[20px] rounded-[20px] overflow-hidden shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                    <Image
                        src={"https:" + imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <h3 className="text-center text-[19px] font-bold mb-[15px] leading-[22px] transition-colors duration-300" style={{ color: 'var(--color-1)' }}>{ title }</h3>
                <p className="text-center m-0 line-clamp-[10] leading-[21px] mb-[15px] text-sm" style={{ color: 'var(--grayText)' }}>{ summary }</p>
                <p className='w-full text-center text-xs italic' style={{ color: 'var(--grayText)' }}>{ author } · { localCreationDate }</p>
            </div>
        </Link>
    );
}

export default PostTile;