import Link from "next/link";
import { cn } from "~/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

const buttonClass: string = "transition-colors bg-transparent duration-500 text-pink-600 overflow-hidden border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:top-0 before:left-0 before:bg-pink-600 before:origin-left before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100";
export function LinkButton({ className, ...linkProps }: React.ComponentProps<typeof Link>) {
  return (
    <Link {...linkProps} className={cn(buttonClass, className)} />
  );
};
export function Button({ className, ...buttonProps }: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button {...buttonProps} className={cn(buttonClass, className)} />
  );
};

export function InlineLink({ className, ...linkProps }: React.ComponentProps<typeof Link>) {
  return (
    <Link {...linkProps} className={cn("transition-colors duration-500 text-pink-600 hover:text-pink-700 focus:text-pink-700", className)} />
  );
};

export function Leader({ name, position, src, children }: { name: string, position: string, src: string, children: React.ReactNode }) {
  return (
    <Card className="basis-full lg:basis-1/2">
      <CardHeader>
        <CardTitle className="text-4xl">{name}</CardTitle>
        <CardDescription className="text-xl">{position}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center md:items-start space-x-4">
        <Image src={`/assets/img/${src}`} className="basis-1/2 object-cover rounded-lg drop-shadow" alt={`Image of ${name}`} width={1600} height={1067} loading="eager" sizes="(max-width: 1024px) 50vw, 25vw"></Image>
        <p className="basis-1/2 text-start">{children}</p>
      </CardContent>
    </Card>
  );
};