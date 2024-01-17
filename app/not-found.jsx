import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-8 py-24 flex flex-col flex-wrap md:flex-row md:flex-nowrap justify-between gap-12 relative text-neutral-900/75">
      <aside className="w-full md:w-1/4">
        <p className="border-b-2 border-pink-600 font-medium text-neutral-900">Error 404</p>
      </aside>
      <main className="flex flex-col flex-wrap justify-center w-full md:w-1/2 text-center md:text-start">
        <h2 className="mb-3 text-3xl text-pink-600">Hmm...</h2>
        <p className="mb-6">It seems like the page you were looking for could not be found. If this seems like a mistake, please <Link href="/contact-us" className="text-pink-600 transition-colors duration-300 hover:text-pink-700 focus-visible:text-pink-700">contact us</Link>. Thank you!</p>
        <Link href="/" className="w-fit mx-auto md:mx-0 overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-pink-600 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-pink-600 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right">Homepage</Link>
      </main>
      <aside className="w-full md:w-1/4">
        <Image src="/assets/img/logo.webp" alt="Sisters in STEM robot" width={250} height={250} sizes="(min-width: 768px) 25vw, 100vw" className="m-auto h-fit" priority></Image>
      </aside>
    </main>
  );
};