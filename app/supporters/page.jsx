import PageHeader from "/components/page-header";
import ExpandableImage from "/components/expandable-image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Supporters" description="SiS could not function without the community that surrounds us, thank you!" src="/assets/img/sponsors-and-partners.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Thank You!</h3>
        </header>
        <section className="text-neutral-900/75 mb-4">
          <header className="mb-4">
            <h4 className="text-2xl text-pink-600">Thank You to Our Volunteers!</h4>
            <p>Our organization could not function without our incredible volunteers.</p>
          </header>
          <main className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center px-8 gap-8">
            <ExpandableImage sizes="100vw" src="/assets/img/sistersinstem.jpg" alt="Picture 1 of our volunteers" width={360} height={240} buttonClassName="rounded-xl" />
            <ExpandableImage sizes="100vw" src="/assets/img/volunteers.webp" alt="Picture 2 of our volunteers" width={360} height={240} buttonClassName="rounded-xl" />
          </main>
        </section>
        <section className="text-neutral-900/75">
          <header className="mb-4">
            <h4 className="text-2xl text-pink-600">Thank You to Our Donors & Mentors!</h4>
            <p>Without our donors & mentors, our organization could not continue to host events. Thank you.</p>
          </header>
          <main className="flex flex-col flex-wrap md:flex-row justify-center">
            
          </main>
        </section>
      </main>
    </main>
  );
};