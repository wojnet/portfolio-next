import Image from 'next/image';
import MonthCounter from './components/MonthCounter';
import Link from 'next/link';
import Project from './components/Project';
import Skill from './components/Skill';
import skills from './skills';
import TypewrittingText from './components/TypewrittingText';

export default function Home() {
  const startDate = new Date(2021, 8, 25);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row justify-start lg:justify-around items-center p-[40px_60px] gap-[40px] mt-[10px] lg:mt-[50px] mb-[50px]">
        <section className='w-full max-w-[450px] flex flex-col items-center text-center gap-[10px] mb-[10px]'>
          <TypewrittingText />
          <p className="max-w-[300px] sm:max-w-[400px] text-sm sm:text-base mt-[15px]">
            I&apos;m a programmer technician living near <b>Opole,&nbsp;Poland</b>. I started taking an interest in web development and programming <b><MonthCounter startDate={startDate} title="Started in April 2021, date calculated by JavaScript" /></b> ago.
          </p>
          <p className="max-w-[300px] sm:max-w-[400px] text-sm sm:text-base mt-[15px]">
            I&apos;m interested in <b>3D modeling and printing</b>. I also love <b>writing songs</b>, and everything related to&nbsp;<b>music</b>.
          </p>
        </section>
        <section className="w-2/3 max-w-[350px] flex flex-col items-center gap-2">
          <Image src="https://utfs.io/f/t6iH1H8S127jCGUd49Sp71PBS6M9AzjkfdebxrWoZTImRa35" alt="Wojtek" width={0} height={0} priority sizes="100%" className="w-full rounded-[50px] shadow-[5px_5px_10px_#0002]" />
          <p className="text-xs text-gray-text font-mono">
            PHOTO BY
            <a href="https://www.instagram.com/miaurb/" className="font-mono" target="_blank"> @MIAURB</a>
          </p>
        </section>
      </div>
      <h2 className="text-center text-3xl font-bold font-spaceGrotesk mb-[30px]">
        TECHNOLOGIES<br />I&apos;M USING
      </h2>
      <div className="w-full max-w-[1000px] grid grid-cols-1 justify-items-center sm:grid-cols-2 min-[850px]:grid-cols-3 gap-[25px_15px] justify-center content-center p-[10px_10px] sm:p-[10px_100px] mb-[50px]">
        { skills.map((skill, index) => <Skill
          key={index}
          url={skill.url}
          alt={skill.alt}
          stars={skill.stars}
          title={skill.title}
          description={skill?.description}
        />) }
      </div>
      <Link className="text-sm text-background-color bg-emerald-500 mb-[100px] font-bold border rounded-lg p-[2px_7px] transition hover:text-emerald-500 hover:bg-background-color" href="https://github.com/devicons/devicon" target="_blank">Icons&nbsp;I&nbsp;used</Link>
      <h2 className="text-center text-3xl font-bold font-spaceGrotesk mb-[20px]">
      🛠️ MY PROJECTS 🛠️
      </h2>
      <p className="mb-[45px]">
        Some of my work<br />you can see online
      </p>
      <div className="w-full flex justify-center flex-wrap gap-[50px] px-[50px] mb-[50px]">
        <Project
          imageSrc="https://utfs.io/f/t6iH1H8S127jYfn2U3CXFBrZX51V4O8s0kJz7WRiLAxEq6lu"
          imageAlt="Reverse"
          title="REVERSE"
          description="Web application created for **songwriters** to put their creative side into the sheet."
          url="https://reverse-app.vercel.app/"
          inDevelopment={false}
          key={1}
        />
        <Project
          imageSrc="https://utfs.io/f/t6iH1H8S127jlEYtkbGPzAQE4XuxWqj0Y2adhTbw7v3ZOf1S"
          imageAlt="Song"
          title="MY SONG"
          description="First, **debut single** that I produced for my band *Paper Limbs*."
          url="https://open.spotify.com/track/5aQuQIop5l4ZYJcr1wvGDw?si=1589045106814c54"
          inDevelopment={false}
          key={2}
        />
      </div>
    </main>
  );
}