// The header that appears at the top of each page (excluding the home page) explaining what the page is for
import Image from "next/image";

export default function PageHeader({ title }) {
  return (
    <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
      {/* <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src={src} alt={title} width={672} height={228} quality={100} loading="eager" priority sizes="90vw" /> */}
      <h2 className="text-5xl text-pink-600 font-semibold">{title}</h2>
    </header>
  );
};