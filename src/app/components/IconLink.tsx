import { FC, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface IconLinkProps {
    href: string;
    iconUrl: string;
    iconAlt: string;
    children: ReactNode | string;
}

const IconLink: FC<IconLinkProps> = ({ href, iconUrl, iconAlt, children }) => {
  return (
    <Link href={href} target="_blank" className="h-[40px] flex items-center gap-3 px-[14px] rounded-[12px] transition-all duration-300 group border border-[rgba(72,80,230,0.12)] bg-[rgba(72,80,230,0.05)] hover:bg-[rgba(72,80,230,0.1)] hover:border-[rgba(72,80,230,0.3)] hover:shadow-[0_4px_16px_rgba(72,80,230,0.12)]">
        <Image src={iconUrl} alt={iconAlt} width={24} height={24} className="opacity-90 scale-75" />
        <p className="text-color-1 text-sm group-hover:text-color-2 transition">{ children }</p>
    </Link>
  );
}

export default IconLink;