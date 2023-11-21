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
            <div className="w-[300px] h-auto flex flex-col items-center cursor-pointer p-[12px] hover:scale-[0.98] transition group"> {/* hover:outline hover:outline-[1px] hover:outline-gray-text hover:rounded-[30px] */}
                <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    width={0}
                    height={0}
                    placeholder="blur"
                    className="w-full h-[220px] object-cover rounded-[25px] mb-[20px] shadow-lg transition" 
                />
                <h3 className="text-center text-[19px] font-bold mb-[15px] leading-[22px] group-hover:text-color-2 transition">{ title }</h3>
                <p className="text-gray-text text-center m-0 line-clamp-[10] leading-[21px] mb-[15px] group-hover:text-color-4 transition">{ summary }</p>
                <p className='w-full text-gray-text text-center text-xs italic group-hover:text-color-4 transition'>{ author } - { localCreationDate }</p>
            </div>
        </Link>
    );
}

export default PostTile;