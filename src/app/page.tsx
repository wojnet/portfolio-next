import Image from 'next/image';
import MonthCounter from './components/MonthCounter';
import Link from 'next/link';
import Project from './components/Project';
import Skill from './components/Skill';
import skills from './skills';
import BlockCursor from './components/BlockCursor';

export default function Home() {
  const startDate = new Date(2021, 8, 25);

  return (
    <main className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row justify-start lg:justify-around items-center p-[40px_60px] gap-[40px] mt-[10px] lg:mt-[50px] mb-[50px]">
        <section className='w-full max-w-[450px] flex flex-col items-center text-center gap-[10px] mb-[10px]'>
          <h2 className="max-w-[600px] text-[24px] sm:text-[28px] font-bold lg:text-[36px] w-full [text-shadow:_0_0_20px_var(--backgroundColor)] m-0">
            Hi, I&apos;m Wojciech<br /><span className="TextBG mx-[5px]">WEB&nbsp;DEVELOPER</span>
          </h2>
          <p className="max-w-[300px] sm:max-w-[400px] text-sm sm:text-base mt-[15px]">
          I&apos;m a programmer technician living near <b>Opole, Poland</b>. I have over <b><MonthCounter startDate={startDate} title="Started in April 2021, date calculated by JavaScript" /></b> of non-commercial experience in Front-End development and generally programming. <BlockCursor />
          </p>
        </section>
        <Image src="/images/wojtek.jpg" alt="Wojtek" width={0} height={0} priority sizes="100%" className="w-2/3 max-w-[350px] rounded-[50px] shadow-[5px_5px_10px_#0002]" />
      </div>
      <h2 className="text-center text-2xl font-bold mb-[30px]">
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
      <Link className="text-sm text-background-color bg-emerald-500 mb-[100px] font-bold border rounded-lg p-[2px_7px] transition hover:text-emerald-500 hover:bg-background-color" href="https://github.com/devicons/devicon" target="_blank">Icons I used</Link>
      <h2 className="text-center text-2xl font-bold mb-[30px]">
        MY PROJECTS
      </h2>
      <p className="mb-10">
        Some of my work<br />you can see online
      </p>
      <div className="w-full flex justify-center flex-wrap gap-[50px] px-[50px] mb-[50px]">
        <Project
          imageSrc="/images/bangerify.png"
          imageAlt="Bangerify" title="BANGERIFY"
          description="Bangerify is the social media app to share your hot takes on music. It's new project and it's updated frequently."
          url="http://bangerify.com/"
          inDevelopment={false}
          key={1}
        />
      </div>
    </main>
  )
}