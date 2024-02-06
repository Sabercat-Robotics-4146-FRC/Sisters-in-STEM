import PageHeader from "/components/page-header";
import ExpandableImage from "/components/expandable-image";
import InlineLink from "/components/inline-link";

function Initiative({ title, src, alt, imgHeight, imgWidth, left, children }) {
  return (
    <section className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {left ? <aside className="basis-1/2 hidden lg:block">
        <ExpandableImage src={`/assets/img/${src}`} alt={alt} sizes="(min-width: 1024px) 25vw, 50vw" height={imgHeight} width={imgWidth} buttonClassName="rounded-xl" />
      </aside> : ""}
      <main className="text-neutral-900/75 basis-1/2">
        <header className="mb-2 text-center">
          <h3 className="text-3xl text-pink-600">{title}</h3>
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
      <PageHeader title="Initiatives" />
      <main className="px-6 min-[480px]:px-12">
        <main className="flex flex-col flex-wrap space-y-4">
          <Initiative title="The Annual SiS STEM Celebration" src="annual-celebration.webp" alt="Boy looking through microscope to learn about biology." imgHeight={1707} imgWidth={2560}>
            <p>Every year, SiS welcomes students ages 5-15 to Saguaro High School to spend an afternoon exploring the wonderful world of STEM. We offer live, hands-on experiments in all areas of STEM, no matter if your student is a geology genius, a physics fiend - or has no experience, but lots of questions about STEM! Along with our industry and academic partners, we invite students of all ages and walks of life to see, try, and experiment with the amazing world of STEM; to show them the infinite possibilities and fun in the fields of science.</p>
          </Initiative>
          <Initiative left title="SiS Roadshow" src="roadshow.webp" alt="SiS volunteers at setup booths helping children discover their interest for the magical world of STEM." imgHeight={1920} imgWidth={2560}>
            <p>Using our fully stocked SiS trailer, we travel to make STEM more accessible to schools and communities in the Valley. With our portable set of experiments and volunteers, from hosting tables at your school science fair to full-scale SiS events, we&apos;re happy to help! Previous events have included the Barrett-Jackson Gearing Toward the Future STEM Fest, Scottsdale Public Library Ultimate Playdate, and Scottsdale Unified Schools&apos; STEM Nights.</p>
          </Initiative>
          <Initiative title={"Jada Saves the Day \"Read To Me\""} src="jada-reading.webp" alt="SiS volunteer answering the question of a student during a Jada Reading." imgHeight={1920} imgWidth={2560}>
            <p>Jada Saves the Day!, written and published by one of our SiS student founders, follows the story of Jada, as she solves a nefarious cyber crime for her brother&apos;s robotics team. Written for students in grades K-5, &quot;Jada&quot; introduces young readers to the amazing world of robotics while teaching important lessons about cybersecurity, courage, and integrity. Through our &quot;Read To Me&quot; program, our volunteers have introduced Jada to hundreds of students in schools and clubs throughout greater Phoenix.</p>
          </Initiative>
          <Initiative left title="SiS & the Pandemic" src="pandemic.webp" alt="The SiS team teaching students about STEM through Zoom, despite the difficulties of the pandemic." imgHeight={1707} imgWidth={2560}>
            <p>During the COVID-19 pandemic, the SiS team stayed in action, revising our programs for a virtual world. First Fridays, virtual events hosted on the first Friday of each month, brought STEM into the home. Our Annual STEM Celebration continued, in a virtual event hosted by our SiS team and a panel of industry professionals. <InlineLink href="/initiatives/cybersis">CyberSiS</InlineLink>, our cyber safety program for students in grades 3-5, was also developed during the pandemic, teaching ever more important cybersecurity lessons to classrooms virtually. You can find archives of these experiments and lessons on the <InlineLink href="/archive">SiS archive</InlineLink>.</p>
          </Initiative>
        </main>
      </main>
    </main>
  );
};