import Image from "next/image";
import IconLink from "../components/IconLink";

const contactOptions = [
  { href: "mailto:wojnetto@gmail.com", iconUrl: "/svg/mail.svg", iconAlt: "mail", text: "wojnetto@gmail.com" },
  { href: "https://github.com/wojnet", iconUrl: "/svg/github.svg", iconAlt: "github", text: "@wojnet" },
  { href: "https://www.instagram.com/thewasteghost/", iconUrl: "/svg/instagram.svg", iconAlt: "instagram", text: "@thewasteghost" },
];

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center flex-1">
      <Image src="/svg/envelope.svg" alt="envelope" loading="lazy" height={90} width={90} className="my-[50px]" />
      <h1 className="text-xl font-bold my-[10px]">
        CONTACT PAGE
      </h1>
      <p className="max-w-[350px] text-center text-gray-text leading-5 mb-[30px]">
        Have some questions? Feel free to contact with me. I&apos;m open for propositions.
      </p>
      { contactOptions.map((e, index) => <IconLink
        key={index}
        href={e.href}
        iconUrl={e.iconUrl}
        iconAlt={e.iconAlt}
      >
        {e.text}
      </IconLink>) }
    </div>
  );
}

export default Contact;