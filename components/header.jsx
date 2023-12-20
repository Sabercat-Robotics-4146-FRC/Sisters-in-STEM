// Header for the whole website
"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { createRef, useEffect } from "react";

export default function Header() {
  const Path = usePathname();

  const Heading = createRef();
  const MobileNav = createRef();
  const MobileSVG = createRef();

  useEffect(function() {
    new ResizeObserver(function() {
      if (window.innerWidth > 767 && Heading.current && MobileNav.current && MobileSVG.current) {
        Heading.current.classList.add("text-pink-600");
        Heading.current.classList.remove("text-white");
        MobileNav.current.classList.add("-translate-x-full");
        MobileSVG.current.classList.add("fill-pink-600");
        MobileSVG.current.classList.remove("fill-white");
        MobileSVG.current.children[0].classList.remove("rotate-45", "-translate-x-[35%]", "translate-y-[58%]");
        MobileSVG.current.children[1].classList.remove("scale-x-0");
        MobileSVG.current.children[2].classList.remove("-rotate-45", "-translate-x-[10%]", "translate-y-[10%]");
      };
    }).observe(document.body);  
  });

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between md:justify-center gap-2 py-5 px-4 bg-white border-b shadow-black shadow-[0_-8px_16px]">
      <button type="button" className="md:hidden" onClick={function() {
        MobileNav.current.classList.toggle("-translate-x-full");
        Heading.current.classList.toggle("text-pink-600");
        Heading.current.classList.toggle("text-white");
        MobileSVG.current.classList.toggle("fill-pink-600");
        MobileSVG.current.classList.toggle("fill-white");
        MobileSVG.current.children[0].classList.toggle("rotate-45");
        MobileSVG.current.children[0].classList.toggle("-translate-x-[35%]");
        MobileSVG.current.children[0].classList.toggle("translate-y-[58%]");
        MobileSVG.current.children[1].classList.toggle("scale-x-0");
        MobileSVG.current.children[2].classList.toggle("-rotate-45");
        MobileSVG.current.children[2].classList.toggle("-translate-x-[10%]");
        MobileSVG.current.children[2].classList.toggle("translate-y-[10%]");
      }}>
        <svg ref={MobileSVG} viewBox="0 0 448 480" width="2rem" height="2rem" className="fill-pink-600 transition-colors duration-500 ease-in-out z-10">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96z" className="origin-right transition-transform duration-500 ease-in-out"></path>
          <path d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z" className="origin-center transition-transform duration-500 ease-in-out"></path>
          <path d="M448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" className="origin-left transition-transform duration-500 ease-in-out"></path>
        </svg>
        <nav ref={MobileNav} className="-translate-x-full transition-transform duration-500 ease-in-out inset-0 fixed w-screen h-screen bg-pink-600 -z-50 flex flex-col flex-wrap justify-center items-center gap-y-8 text-2xl text-white">
          <Link href="/" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Home</Link>
          <Link href="/initiatives" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/initiatives" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Initiatives</Link>
          <Link href="/leadership" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/leadership" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Leadership</Link>
          <Link href="/supporters" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/supporters" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Supporters</Link>
          <Link href="/contact-us" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/contact-us" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Contact Us</Link>
          <Link href="/about-us" className={`relative transition-[font-weight] duration-300 after:absolute after:bg-white after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/about-us" ? "font-semibold after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:after:scale-x-100 hover:after:origin-right focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>About Us</Link>
        </nav>
      </button>
      <Link className="w-max flex flex-nowrap justify-center items-center" href="/">
        <Image className="w-14" src="/assets/img/logo.webp" alt="Sisters in STEM robot" height={50} width={50} quality={100}></Image>
        <h1 ref={Heading} className="hidden min-[400px]:block text-pink-600 text-4xl transition-colors duration-500 ease-in-out">Sisters in STEM</h1>
      </Link>
      <nav className="hidden w-full md:flex flex-nowrap justify-center items-center gap-x-8 tracking-wide">
        <Link href="/" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Home</Link>
        <Link href="/initiatives" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/initiatives" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Initiatives</Link>
        <Link href="/leadership" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/leadership" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Leadership</Link>
        <Link href="/supporters" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/supporters" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Supporters</Link>
        <Link href="/contact-us" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/contact-us" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>Contact Us</Link>
        <Link href="/about-us" className={`relative transition-[color,font-weight] duration-300 after:absolute after:bg-pink-600 after:w-full after:h-[2px] after:left-0 after:bottom-0 after:origin-left after:transition-[transform,transform-origin] after:duration-[300ms,0ms] after:delay-[0ms,300ms] ${Path === "/about-us" ? "font-semibold text-pink-600 after:scale-x-100 after:origin-right" : "after:scale-x-0"} hover:text-pink-600 hover:after:scale-x-100 hover:after:origin-right focus-visible:text-pink-600 focus-visible:after:scale-x-100 focus-visible:after:origin-right`}>About Us</Link>
      </nav>
    </header>
  );
};