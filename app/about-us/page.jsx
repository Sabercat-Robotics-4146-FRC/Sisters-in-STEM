import PageHeader from "/components/page-header";
import ExpandableImage from "/components/expandable-image";
import InlineLink from "/components/inline-link";

function Section({ title, src, alt, imgHeight, imgWidth, left, children }) {
  return (
    <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {left ? <aside className="basis-1/2 hidden lg:block">
        <ExpandableImage src={`/assets/img/${src}`} alt={alt} sizes="(min-width: 1024px) 25vw, 50vw" height={imgHeight} width={imgWidth} buttonClassName="rounded-xl" />
      </aside> : ""}
      <main className="text-neutral-900/75 basis-1/2">
        <header className="mb-2 text-center">
          <h4 className="text-3xl text-pink-600">{title}</h4>
        </header>
        {children}
      </main>
      <aside className={`basis-1/2 block ${left ? "lg:hidden" : ""}`}>
        <ExpandableImage src={`/assets/img/${src}`} alt={alt} sizes="(min-width: 1024px) 25vw, 50vw" height={imgHeight} width={imgWidth} buttonClassName="rounded-xl" />
      </aside>
    </section>
  );
};

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="About Us" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-4xl text-pink-600">About Us</h3>
        </header>
        <main className="flex flex-col flex-wrap space-y-4">
          <Section title="Our Beginnings" src="logo.webp" alt="Sisters in STEM robot" imgHeight={2000} imgWidth={2000}>
            <p>Inspired by the cancellation of a local STEM event for girls in 2018, three Saguaro FRC Robotics students decided to create an event of their own. In just three weeks, they created a live STEM fair for students aged 5-15 and their parents across the Valley. With over 200 attendees, 45 student volunteers, and over 50 Phoenix professional and academic participants, our first year was a wild success - and taught us how much more we could do for our community!</p>
          </Section>
          <Section left title="Who We Are" src="about-us.webp" alt="SiS volunteer amazing young girl with STEM experiment." imgHeight={1620} imgWidth={1080}>
            <p>We are students at Saguaro High with a passion for STEM - and we want to share that love of the sciences with everyone in our community! Supported by our MSA leadership, SUSD leaders, and mentors throughout the STEM professional community, we design, create, and run a broad array of STEM oriented events and initiatives within SUSD and for the broader Phoenix community.</p>
          </Section>
          <Section title="What We Do" src="syringe-stem-experiment.webp" alt="2 young girls using synringes in a STEM experiment at SiS event" imgHeight={2560} imgWidth={1707}>
            <p>Each year, we host a large event, just like the one that gave us our start--except, bigger & better. Our events also travel with the SiS Roadshow, made possible by the Arizona Diamondbacks School Challenge Program. We also do book readings of Jada Saves the Day!, written by founder Kayli Battel. To find out more about our events, <InlineLink href="/initiatives">click here</InlineLink>.</p>
          </Section>
          <Section left title="Why We Do It" src="girl-microscope.webp" alt="Young girl looking through microscope during an experiment at a SiS event" imgHeight={2560} imgWidth={1696}>
            <p>Our events are by students, for students. We know what it&apos;s like to be the only girl in a computer science class, or the friend left to decorate the group project. Our events aim to change that, one child at a time, by showing all children that STEM is a field for everyone.</p>
          </Section>
        </main>
      </main>
    </main>
  );
};