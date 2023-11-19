import { FC, ReactNode } from 'react';
import ReactMarkdown from "react-markdown";

interface SkillProps {
    url: string;
    alt: string
    stars: number;
    title: string;
    description?: string;
}

const Skill: FC<SkillProps> = ({ url, alt, stars, title, description }) => {
    const starsArray: number[] = [];

    for(let i = 0; i < stars; i++) {
        starsArray.push(1);
    }

    for(let i = 0; i < (6 - stars); i++) {
        starsArray.push(0);
    }
    
    const starElements = starsArray.map(starState => {
        return <img className='w-[15px] h-[15px] p-0' 
            src={ starState === 1 ? "/svg/star-solid.svg" : "/svg/star-outline.svg" }
            alt={ starState === 1 ? "Solid star" : "Outline star" } />
    });

    return (
        <div className="w-full max-w-[250px] min-h-[100px] flex flex-col items-center justify-start px-[20px]">
            <div className="h-[80px] flex self-start items-center text-[14px]">
                <img src={url} alt={alt} className="h-full select-none p-[20px]" />
                <h3 className="font-bold text-[16px]">{ title }</h3>
            </div>
            <div className="w-1/2 flex justify-center mb-[20px] gap-[2px] select-none">
                { starElements }
            </div>
            <ReactMarkdown className="text-sm w-3/4 text-center">{description}</ReactMarkdown>
        </div>
    );
}

export default Skill;