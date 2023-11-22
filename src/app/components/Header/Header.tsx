import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

export interface INavigationTab {
    href: string;
    displayName: string;
    additionalPathnames?: string[];
}

const navigationTabs: INavigationTab[] = [
    { href: "/", displayName: "Home" },
    { href: "/blog", displayName: "Blog", additionalPathnames: ["/post"] },
    { href: "/contact", displayName: "Contact" }
];

const Header = () => {
    return (
        <header className="w-full max-w-[1000px] h-[150px] sm:h-[100px] flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-[20px] sm:gap-0 px-[40px]">
            <Link href="/">
                <h3 className="text-color-1 text-[18px] text-center font-bold font-spaceGrotesk leading-[24px] cursor-pointer select-none">WOJCIECH<br />
                    <span className="text-color-1 font-spaceGrotesk text-[38px]">GLID</span>
                </h3>
            </Link>
            <HeaderNavigation tabs={navigationTabs} />
        </header>
    );
}

export default Header;