import Image from 'next/image';
import MonthCounter from './components/MonthCounter';
import Link from 'next/link';
import Project from './components/Project';
import Skill from './components/Skill';
import skills from './skills';
import TypewrittingText from './components/TypewrittingText';

export default function Home() {
  const startDate = new Date(2021, 8, 25);

  const stats = [
    { value: '4+', label: 'years coding' },
    { value: '6th', label: 'semester computer science student' },
    { value: '∞',  label: 'bugs fixed' },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col items-center relative overflow-x-hidden">

      {/* decoration orbs */}
      <div aria-hidden="true" className="absolute top-[-120px] left-[-220px] w-[700px] h-[700px] rounded-full pointer-events-none select-none" style={{ background: 'radial-gradient(circle, rgba(72,80,230,0.11) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute top-[260px] right-[-260px] w-[620px] h-[620px] rounded-full pointer-events-none select-none" style={{ background: 'radial-gradient(circle, rgba(101,132,255,0.09) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute top-[1100px] left-[-180px] w-[500px] h-[500px] rounded-full pointer-events-none select-none" style={{ background: 'radial-gradient(circle, rgba(72,80,230,0.07) 0%, transparent 65%)' }} />
      <div aria-hidden="true" className="absolute top-[1900px] right-[-200px] w-[480px] h-[480px] rounded-full pointer-events-none select-none" style={{ background: 'radial-gradient(circle, rgba(101,132,255,0.07) 0%, transparent 65%)' }} />

      {/* hero */}
      <div className="relative z-10 w-full max-w-[1000px] flex flex-col lg:flex-row justify-start lg:justify-around items-center p-[40px_60px] gap-[40px] mt-[10px] lg:mt-[50px] mb-[30px]">
        <section className='w-full max-w-[450px] flex flex-col items-center text-center gap-[10px] mb-[10px]'>
          <TypewrittingText />
          <p className="max-w-[300px] sm:max-w-[400px] text-sm sm:text-base mt-[15px] leading-relaxed">
            Based near <b>Opole,&nbsp;Poland</b>. I got into web development <b><MonthCounter startDate={startDate} title="Started in April 2021, date calculated by JavaScript" /></b> ago, thanks to my dad, and it quickly turned into something I really like.
          </p>
          <p className="max-w-[300px] sm:max-w-[400px] text-sm sm:text-base mt-[15px] leading-relaxed">
            Besides that, I&apos;m having fun with a <b>3D printer</b>, I&apos;m also writing and producing <b>music</b> for my indie project <b>Znaki&nbsp;Dymne</b>.
          </p>
        </section>
        <section className="w-2/3 max-w-[350px] flex flex-col items-center gap-2">
          <div className="relative w-full">
            <div className="absolute inset-0 rounded-[55px] blur-2xl opacity-20 scale-95" style={{ background: 'linear-gradient(135deg, #4850e6, #6584ff)' }} />
            <Image
              src="https://pgdwcchs6h.ufs.sh/f/t6iH1H8S127j1AVFlu748YG9Ko7DhpfzWPBRUQctv026rN1e"
              blurDataURL="/images/wojtekBlur.jpg"
              placeholder="blur"
              alt="picture of me"
              width={0}
              height={0}
              priority
              sizes="100%"
              className="relative w-full rounded-[50px] shadow-[8px_8px_30px_rgba(72,80,230,0.15)] select-none rotate-1 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </section>
      </div>

      {/* stats */}
      <div className="relative z-10 w-full max-w-[720px] grid grid-cols-3 gap-[12px] sm:gap-[20px] px-[30px] sm:px-[60px] mb-[90px]">
        {stats.map(({ value, label }, index) => (
          <div 
            key={label}
            className="text-center py-5 px-2 rounded-2xl"
            style={{ border: '1px solid rgba(72,80,230,0.13)', background: 'rgba(72,80,230,0.03)', rotate: `${(index*3)-3}deg`, transform: `translateY(${Math.abs(index-1)*5}px)` }}
          >
            <p
              className="text-[32px] sm:text-[42px] md:text-[46px] font-bold font-spaceGrotesk gradient-text leading-none mb-[6px]"
            >
              {value}
            </p>
            <p
              className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.18em]"
              style={{ color: 'var(--grayText)' }}
            >
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* projects */}
      <section className="relative z-10 w-full flex flex-col items-center py-[70px]" style={{ background: 'linear-gradient(180deg, transparent, rgba(72,80,230,0.05) 12%, rgba(72,80,230,0.05) 88%, transparent)' }}>
        <h2 className="text-center text-3xl font-bold font-spaceGrotesk mb-[8px]">
          MY PROJECTS
        </h2>
        <div className="section-accent mb-[16px]" />
        <p className="mb-[45px] text-sm text-center" style={{ color: 'var(--grayText)' }}>
          Some of my work you can see online
        </p>
        <div className="w-full flex justify-center flex-wrap gap-[50px] px-[50px]">
          <Project
            imageSrc="https://utfs.io/f/t6iH1H8S127jYfn2U3CXFBrZX51V4O8s0kJz7WRiLAxEq6lu"
            imageAlt="Reverse"
            title="🎼 REVERSE APP"
            description="Web application created for **songwriters** to put their creative side into the sheet."
            url="https://reverse-app.vercel.app/"
            inDevelopment={false}
            key={1}
          />
          <Project
            imageSrc="https://pgdwcchs6h.ufs.sh/f/t6iH1H8S127j0KGsJ3ELU7gaBrQ8R1PXhyTdHoOSMvKewcfn"
            imageAlt="Znaki Dymne"
            title="🎧 MY MUSIC"
            description="First, **EP** that I've written, produced and mixed for my project **Znaki Dymne**."
            url="https://linktr.ee/znakidymne"
            inDevelopment={false}
            key={2}
          />
        </div>
      </section>

      {/* technologies */}
      <section className="relative z-10 w-full flex flex-col items-center pt-[70px]">
        <h2 className="text-center text-3xl font-bold font-spaceGrotesk mb-[8px]">
          TECHNOLOGIES I&apos;M USING
        </h2>
        <div className="section-accent" />
        <Link
          href="https://github.com/devicons/devicon"
          className="inline-block font-bold text-white text-xs px-3 py-1 rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(72,80,230,0.35)] my-2"
          style={{ background: 'linear-gradient(135deg, var(--color-2), var(--color-4))' }}
          target="_blank"
        >
          🔗 Icons
        </Link>
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
      </section>

      {/* contact */}
      <section className="relative z-10 w-full max-w-[760px] px-[30px] sm:px-[60px] mb-[70px] mt-[20px]">
        <div className="rounded-[28px] p-[48px_36px] text-center" style={{ background: 'linear-gradient(135deg, rgba(72,80,230,0.07), rgba(101,132,255,0.11))', border: '1px solid rgba(72,80,230,0.13)' }}>
          <h2 className="text-3xl font-bold font-spaceGrotesk mb-4">
            Let&apos;s build something<br />together!
          </h2>
          <p
            className="max-w-[340px] mx-auto text-sm leading-[1.75] mb-8"
            style={{ color: 'var(--grayText)' }}
          >
            Got a project, a job offer, or just want to say hi? Feel free to contact me. I answer every message.
          </p>
          <Link
            href="/contact"
            className="inline-block font-bold text-white text-sm px-[28px] py-[12px] rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(72,80,230,0.35)]"
            style={{ background: 'linear-gradient(135deg, var(--color-2), var(--color-4))' }}
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
