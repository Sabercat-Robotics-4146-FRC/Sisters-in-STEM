// The header that appears at the top of each page (excluding the home page) explaining what the page is for
import Image from "next/image";

export default function PageHeader({ title, description, src }) {
  return (
    <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
      <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src={src} alt={title} width={672} height={228} quality={100} loading="eager" priority sizes="100vw"></Image>
      <h2 className="text-slate-100 text-4xl font-semibold drop-shadow-[0_0_10px_black]">{title}</h2>
      <p className="text-white/75 text-xl font-medium drop-shadow-[0_0_10px_black]">{description}</p>
    </header>
  );
};