export interface ISkill {
    url: string;
    stars: number;
    alt: string;
    title: string;
    description?: string;
}

const skills: ISkill[] = [
    { url: "/svg/react-original.svg", stars: 4, alt: "React", title: "React", description: "Making React apps is my main job. I have knowledge about most useful concepts such as **`components`**, **`hooks`** and **`DOM`**." },
    { url: "/svg/nextjs-original.svg", stars: 3, alt: "Next.js", title: "Next.js", description: "Next.js is **`React framework`** that enables server-side rendering and other powerful features for web applications." },
    { url: "/svg/javascript-plain.svg", stars: 4, alt: "JavaScript", title: "JavaScript", description: "It&apos;s my favourite language. I&apos;m coding really smoothly with **`ES6`** syntax and other important features." },
    { url: "/svg/html5-plain.svg", stars: 4, alt: "HTML5", title: "HTML", description: "I use **`modern HTML5 elements`** and I am aware that website layout is very important part of web development." },
    { url: "/svg/css3-plain.svg", stars: 4, alt: "CSS3", title: "CSS", description: "**`CSS`** gives us many great features. I understand main concepts of stylizing websites in CSS." },
    { url: "/svg/typescript-plain.svg", stars: 2, alt: "TypeScript", title: "TypeScript", description: "It&apos;s a **`JavaScript superset`** that makes workflow much better. I have basic experience with TypeScript." },
    { url: "/svg/tailwindcss-plain.svg", stars: 3, alt: "Tailwind CSS", title: "Tailwind CSS", description: "A utility-first CSS framework that provides efficient, and highly customizable way to build modern web applications." },
    { url: "/svg/nodejs-plain.svg", stars: 3, alt: "Node", title: "Node.js", description: "I often use Node.js in my React projects. I also use **`Express`** framework to write Back-End." },
    { url: "/svg/mysql-plain.svg", stars: 3, alt: "SQL", title: "SQL & MySQL", description: "**`SQL`** is database language I&apos;ve been working the most time with, especially in **`MySQL`** database management system." },
    { url: "/svg/github-original.svg", stars: 3, alt: "Git & GitHub", title: "Git & GitHub", description: "I use **`Git`** version controll system with **`GitHub`** platform for better workflow." },
    { url: "/svg/amazonwebservices-original.svg", stars: 2, alt: "AWS", title: "AWS", description: "**`Amazon Web Services`** are useful in many different ways. I use **`EC2`** and **`S3`** in my apps." },
    { url: "/svg/mongodb-plain.svg", stars: 2, alt: "MongoDB", title: "MongoDB", description: "Flexible **NoSQL** database, stores data in **BSON** documents. Popular choice for its **scalability**." },
]

export default skills;