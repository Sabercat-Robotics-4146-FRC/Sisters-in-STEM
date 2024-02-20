// Footer for the whole website
import Image from "next/image";
import InlineLink from "/components/inline-link";

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap md:justify-center bg-pink-600 px-8 py-10 md:py-20 shadow-black shadow-[0_8px_16px] mt-auto">
      <main className="flex flex-wrap md:justify-center space-y-8 md:space-y-0 md:space-x-8">
        <section className="w-full md:w-max md:max-w-xs">
          <h2 className="font-medium text-slate-100 text-3xl">What We Do</h2>
          <nav className="flex flex-col flex-wrap text-slate-100">
            <InlineLink href="/about-us" white>About Us</InlineLink>
            <InlineLink href="/initiatives" white>Initiatives</InlineLink>
            <InlineLink href="/initiatives/cybersis" white>CyberSiS</InlineLink>
            <InlineLink href="/archive" white>SiS Archive</InlineLink>
          </nav>
        </section>
        <section className="w-full md:w-max md:max-w-xs">
          <h2 className="font-medium text-slate-100 text-3xl">Support</h2>
          <nav className="flex flex-col flex-wrap text-slate-100">
            <InlineLink href="/supporters" white>Supporters</InlineLink>
            <InlineLink href="/leadership" white>Leadership</InlineLink>
            <InlineLink href="/leadership/past-leaders" white>Past Leaders</InlineLink>
          </nav>
        </section>
        <section className="w-full md:w-max md:max-w-xs">
          <h2 className="font-medium text-slate-100 text-3xl">Contact</h2>
          <nav className="flex flex-col flex-wrap text-slate-100">
            <InlineLink href="/contact-us" white>Contact Us</InlineLink>
            <InlineLink external href="mailto:contact@sistersinstem.net" white>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512" className="fill-current inline mr-1 mb-0.5">
                <title>Envelope Icon</title>
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
              </svg>
              <span className="sr-only">Envelope Icon</span>
              <p className="inline break-all">contact@sistersinstem.net</p>
            </InlineLink>
            <InlineLink external href="https://maps.app.goo.gl/25SioJ1JU4hxqWKU9" white>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="fill-current inline mr-1 mb-1.5">
                <title>Location Icon</title>
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
              <span className="sr-only">Location Icon</span>
              <p className="inline break-all">6250 N 82nd St, Scottsdale, AZ 85250</p>
            </InlineLink>
          </nav>
        </section>
      </main>
      <footer className="mt-6 w-full flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-center items-center divide-y md:divide-x md:divide-y-0 divide-slate-100/70 text-sm text-slate-100/70">
        <a href="https://www.saguaromsaboosters.org/" target="_blank" rel="noopener noreferrer" className="min-w-[25px] px-2 lg:px-4 py-4 inline">
          <Image src="/assets/img/smsa.png" alt="Saguaro Math and Science Academy logo" width={649} height={627} quality={100} className="w-16" sizes="10vw" />
        </a>
        <p className="px-2 lg:px-4 py-4 inline">Copyright &copy; {new Date().getFullYear()} Scottsdale Math And Science Academy. All rights reserved.</p>
      </footer>
    </footer>
  );
};