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
    <Link href={href} target="_blank" className="h-[32px] bg-slate-100 flex items-center gap-3 my-2 p-[3px_8px] rounded-lg shadow-md shadow-slate-200 hover:opacity-75 transition group">
        <Image src={iconUrl} alt={iconAlt} width={24} height={24} className="opacity-70 scale-75" />
        <p className="text-gray-text text-sm group-hover:text-color-2 transition">{ children }</p>
    </Link>
  );
}

export default IconLink;