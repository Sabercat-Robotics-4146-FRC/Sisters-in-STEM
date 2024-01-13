import { Skeleton } from "/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <Skeleton className="relative w-full m-auto px-5 py-20 text-center mb-6 rounded-xl sm:rounded-3xl">
        <h2 className="text-slate-100 text-4xl font-semibold drop-shadow-[0_0_10px_black]">Loading...</h2>
        <p className="text-white/75 text-xl font-medium drop-shadow-[0_0_10px_black]">This page is currently loading...</p>
      </Skeleton>
      <Skeleton className="w-28 lg:w-48 px-5 mb-4 h-10 rounded-lg" />
      <Skeleton className="w-full px-5 mb-2 h-6 rounded-lg" />
      <Skeleton className="w-28 lg:w-48 px-5 h-6 rounded-lg" />
    </main>
  );
};