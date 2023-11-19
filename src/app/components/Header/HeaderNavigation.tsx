"use client"
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { twMerge } from 'tailwind-merge';
import { INavigationTab } from './Header';

interface HeaderNavigationProps {
    tabs: INavigationTab[];
}

const selectedStyle = "bg-[linear-gradient(to_right,var(--c2),var(--c4))] text-background-color [box-shadow:_3px_4px_0_#0002]";

const HeaderNavigation: FC<HeaderNavigationProps> = ({ tabs }) => {
    const pathname = usePathname();

    const isSelected = (tab: INavigationTab) => {
        if (tab.additionalPathnames) {
            return pathname === 
                tab.href ||
                tab.additionalPathnames.includes(`/${pathname.split("/")[1]}`) ||
                tab.additionalPathnames.includes(pathname.split("/")[1]);
        }

        return pathname === tab.href;
    };
    
    const linkElements = tabs.map((tab, index) =>
        <li key={index}>
            <Link href={tab.href} className={twMerge("text-[14px] no-underline p-[3px_10px] rounded-[10px] select-none outline-none [transition:_outline_200ms_ease]", isSelected(tab) ? selectedStyle : "")}>
                { tab.displayName }
            </Link>
        </li>
    );

    return (
        <ul className="flex list-none gap-[10px]">
            { linkElements }
        </ul>
    );
}

export default HeaderNavigation;