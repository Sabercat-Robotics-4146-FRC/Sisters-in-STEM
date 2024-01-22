// Component that easily allows you to add a button that leads to a link
// Don't use for inline styling (use "@/components/inline-link.jsx" instead)
import Link from "next/link";
import { cn } from "/lib/utils";

export default function LinkButton({ children, href, className, external }) {
  // We use before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] because "before:transition-[transform,transform-origin] before:delay-[0ms,500ms] before:duration-[500ms,0ms]" causes weird glitches in Firefox
  return (
    external ? <a target="_blank" rel="noopener norefer" href={href} className={cn("z-[1] transition-colors duration-500 text-pink-600 overflow-clip border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:inset-0 before:bg-pink-600 before:origin-left before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100 mb-2", className)}>
      {children}
    </a> : <Link href={href} className={cn("z-[1] transition-colors duration-500 text-pink-600 overflow-clip border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:inset-0 before:bg-pink-600 before:origin-left before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100 mb-2", className)}>
      {children}
    </Link>
  );
};