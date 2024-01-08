import Link from "next/link";

export default function InlineLink({ external, href, children, white }) {
  if (white) {
    return (external ? <a href={href} target="_blank" rel="noopener noreferrer" className="max-w-fit transition-colors duration-300 text-white hover:text-pink-300 focus-visible:text-pink-300">{children}</a> : <Link href={href} className="max-w-fit transition-colors duration-300 text-white hover:text-pink-300 focus-visible:text-pink-300">{children}</Link>);
  } else {
    return (external ? <a href={href} target="_blank" rel="noopener noreferrer" className="max-w-fit transition-colors duration-300 text-pink-600 hover:text-pink-700 focus-visible:text-pink-700">{children}</a> : <Link href={href} className="max-w-fit transition-colors duration-300 text-pink-600 hover:text-pink-700 focus-visible:text-pink-700">{children}</Link>)
  };
};