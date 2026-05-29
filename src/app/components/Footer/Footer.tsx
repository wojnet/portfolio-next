const Footer = () => {
  return (
    <footer className="w-full h-[100px] flex flex-col justify-center items-center gap-1 border-t border-[#4850e610]">
      <p className="text-xs text-[#7979b3]">© {new Date().getFullYear()} Wojciech Glid. All rights reserved.</p>
      <p className="text-[10px] text-[#7979b3] opacity-60 tracking-widest uppercase">Built with Next.js</p>
    </footer>
  );
};

export default Footer;