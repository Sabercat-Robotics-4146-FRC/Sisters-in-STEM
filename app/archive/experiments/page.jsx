import PageHeader from "/components/page-header";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Archived Experiments" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">Archives: SiS Experiments</h3>
        </header>
        <main className="flex flex-col flex-wrap gap-4">
          
        </main>
      </main>
    </main>
  );
};