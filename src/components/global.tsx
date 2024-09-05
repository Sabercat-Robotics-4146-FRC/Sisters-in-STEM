import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { PathLink } from "./client";

const links: {
  href: `/${string}`;
  text: string;
}[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About Us",
  },
  {
    href: "/initiatives",
    text: "Initiatives",
  },
  {
    href: "/leadership",
    text: "Leadership",
  },
  {
    href: "/supporters",
    text: "Supporters",
  },
  {
    href: "/contact",
    text: "Contact Us",
  },
];
export function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-2 border-b bg-white px-4 py-5 shadow-[0_-8px_16px] shadow-black md:justify-center">
      <Sheet>
        <SheetTrigger className="md:hidden">
          <svg
            viewBox="0 0 448 480"
            width="2rem"
            height="2rem"
            className="z-10 fill-pink-600 transition-colors duration-500 ease-in-out"
          >
            <path
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96z"
              className="origin-right transition-transform duration-500 ease-in-out"
            />
            <path
              d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              className="origin-center transition-transform duration-500 ease-in-out"
            />
            <path
              d="M448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              className="origin-left transition-transform duration-500 ease-in-out"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="z-50 w-full">
          <SheetHeader className="text-start text-pink-600 text-4xl border-b-2 mb-2">Menu</SheetHeader>
          <main className="flex flex-col gap-2">
            {links.map((link) => (
              <PathLink
                key={link.href}
                href={link.href}
                path={link.href}
                pathClass="font-semibold text-pink-600"
                className="hover:text-pink-600 focus:text-pink-600"
              >
                {link.text}
              </PathLink>
            ))}
          </main>
          <SheetFooter className="flex-row justify-end">
            <SheetClose asChild>
              <Button className="w-fit" variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Link
        href="/"
        className="flex w-max flex-nowrap items-center justify-center"
      >
        <Image
          alt="Sisters in STEM robot"
          loading="eager"
          src="/assets/img/logo.webp"
          className="size-14"
          width={2000}
          height={2000}
          quality={100}
          sizes="56vw"
        />
        <h1 className="hidden text-4xl text-pink-600 transition-colors duration-500 ease-in-out min-[400px]:block">
          Sisters in STEM
        </h1>
      </Link>
      <nav className="hidden w-full flex-nowrap items-center justify-center space-x-8 tracking-wide md:flex">
        {links.map((link) => (
          <PathLink
            key={link.href}
            href={link.href}
            path={link.href}
            pathClass="font-semibold text-pink-600 after:scale-x-100"
            className="relative transition-[color,font-weight] duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-pink-600 after:[transition:transform_300ms_0ms,transform-origin_0ms_300ms] hover:text-pink-600 hover:after:origin-right hover:after:scale-x-100 focus-visible:text-pink-600 focus-visible:after:origin-right focus-visible:after:scale-x-100"
          >
            {link.text}
          </PathLink>
        ))}
      </nav>
    </header>
  );
};

export function Footer() {
  return (
    <footer className="flex flex-col justify-center bg-pink-600 p-8 shadow-[0_8px_16px] shadow-black mt-auto">
      <header className="border-b-2 border-white/20">
        <Link href="/" className="flex items-center w-full">
          <Image
            alt="Sisters in STEM robot"
            loading="eager"
            src="/assets/img/logo.webp"
            className="size-14"
            width={2000}
            height={2000}
            quality={100}
            sizes="56vw"
          />
          <h2 className="text-4xl text-white">Sisters in STEM</h2>
        </Link>
      </header>
      <main className="flex flex-wrap gap-8 p-4 border-b-2 border-white/20">
        <section className="flex flex-col gap-2">
          <header>
            <h3 className="text-2xl text-white">Support</h3>
          </header>
          <main className="flex flex-col justify-center">
            <Link
              href="/supporters"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              Supporters
            </Link>
            <Link
              href="/leadership"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              Leadership
            </Link>
            <Link
              href="/leadership/past-leaders"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              Past Leaders
            </Link>
          </main>
        </section>
        <section className="flex flex-col gap-2">
          <header>
            <h3 className="text-2xl text-white">What We Do</h3>
          </header>
          <main className="flex flex-col justify-center">
            <Link
              href="/about"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              About Us
            </Link>
            <Link
              href="/initiatives"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              Initiatives
            </Link>
            <Link
              href="/initiatives/cybersis"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              CyberSiS
            </Link>
            <Link
              href="/archive"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              SiS Archive
            </Link>
          </main>
        </section>
        <section className="flex flex-col gap-2">
          <header>
            <h3 className="text-2xl text-white">Contact</h3>
          </header>
          <main className="flex flex-col justify-center">
            <Link
              href="/contact"
              className="max-w-fit text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              Contact Us
            </Link>
            <a
              href="mailto:contact@sistersinstem.net"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-fit flex items-center gap-1 text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                viewBox="0 0 512 512"
                className="inline fill-current"
                role="presentation"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              contact@sistersinstem.net
            </a>
            <a
              href="https://maps.app.goo.gl/25SioJ1JU4hxqWKU9"
              target="_blank"
              rel="noopener noreferrer"
              className="max-w-fit flex items-center gap-1 text-white transition-colors duration-300 hover:text-pink-300 focus-visible:text-pink-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                className="inline fill-current"
                role="presentation"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              6250 N 82nd St, Scottsdale, AZ 85250
            </a>
          </main>
        </section>
      </main>
      <footer className="px-4 py-2 text-neutral-50/60">
        Copyright © 2024 Scottsdale Math And Science Academy. All rights reserved.
      </footer>
    </footer>
  );
};