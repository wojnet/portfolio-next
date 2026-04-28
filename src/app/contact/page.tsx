import Image from "next/image";
import IconLink from "../components/IconLink";

const contactOptions = [
  { href: "mailto:wojnetto@gmail.com", iconUrl: "/svg/mail.svg", iconAlt: "mail", text: "wojnetto@gmail.com" },
  { href: "https://github.com/wojnet", iconUrl: "/svg/github.svg", iconAlt: "github", text: "@wojnet" },
];

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center flex-1 pt-[60px] pb-[80px]">
      <div
        className="relative mb-[40px] hover:rotate-[-10deg]"
        style={{
          transitionProperty: "all",
          transitionTimingFunction: "ease",
          transitionDuration: "500ms"
        }}
      >
        <div className="absolute inset-0 blur-2xl opacity-20 rounded-full scale-150" style={{ background: 'linear-gradient(135deg, #4850e6, #6584ff)' }} />
        <Image
          className="relative rotate-6"
          src="/svg/envelope.svg"
          alt="envelope"
          loading="lazy"
          height={80}
          width={80}
        />
      </div>
      <h1 className="text-3xl font-bold font-spaceGrotesk mb-[6px] gradient-text">
        GET IN TOUCH
      </h1>
      <div className="section-accent mb-[20px]" />
      <p className="max-w-[320px] text-center leading-6 mb-[36px] text-sm" style={{ color: 'var(--grayText)' }}>
        Have some questions or a proposition? Feel free to reach out!
      </p>
      <div className="flex flex-col gap-3 items-center">
        { contactOptions.map((e, index) => <IconLink
          key={index}
          href={e.href}
          iconUrl={e.iconUrl}
          iconAlt={e.iconAlt}
        >
          {e.text}
        </IconLink>) }
      </div>
    </div>
  );
}

export default Contact;