"use client"
import { FC } from 'react';
import { useTypewriter } from 'react-simple-typewriter';

interface TypewrittingTextProps {
  
}

const TypewrittingText: FC<TypewrittingTextProps> = ({}) => {
    const [ text ] = useTypewriter({
        words: [
            "WEB DEVELOPER",
            "PROGRAMMER",
            "IT STUDENT"
        ],
        loop: 0,
        typeSpeed: 100,
        delaySpeed: 2000
    });

    return (
        <h2 className="max-w-[600px] text-[24px] sm:text-[28px] font-bold lg:text-[36px] w-full [text-shadow:_0_0_20px_var(--backgroundColor)] m-0">
            Hi, I&apos;m Wojciech<br />
            <span className="TextBG mx-[5px]">
                {text}
            </span>
        </h2>
    );
}

export default TypewrittingText;