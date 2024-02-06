import PageHeader from "/components/page-header";
import EmailForm from "/components/email-form";
import InlineLink from "/components/inline-link";

export default function Page() {  
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Contact Us" />
      <main className="px-6 min-[480px]:px-12">
        <main className="flex flex-col flex-wrap justify-center items-center text-center mb-4">
          <header className="w-full mb-2">
            <h2 className="font-semibold text-start text-3xl text-pink-600">Contact Form</h2>
          </header>
          <EmailForm />
        </main>
        <section className="flex flex-col flex-wrap justify-center items-center text-center">
          <header className="w-full mb-2">
            <h2 className="font-semibold text-start text-3xl text-pink-600">Email</h2>
          </header>
          <main className="w-full text-start">
            If you&apos;d prefer, you may also contact us <InlineLink external href="mailto:contact@sistersinstem.net">via email</InlineLink> (contact@sistersinstem.net).
          </main>
        </section>
      </main>
    </main>
  );
};