import LinkButton from "/components/link-button";
import PageHeader from "/components/page-header";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "/components/ui/card";

export function Leader({ name, position, src, children }) {
  return (
    <Card className="basis-full lg:basis-1/2">
      <CardHeader>
        <CardTitle className="text-4xl">{name}</CardTitle>
        <CardDescription className="text-xl">{position}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row flex-wrap md:flex-nowrap justify-center items-center md:items-start space-x-4">
        <Image src={`/assets/img/${src}`} className="basis-1/2 object-cover rounded-lg" alt={`Image of ${name}`} width={250} height={250} loading="eager" sizes="(max-width: 1024px) 50vw, 25vw"></Image>
        <p className="basis-1/2 text-start">{children}</p>
      </CardContent>
    </Card>
  );
};
export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Leadership" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <h3 className="text-3xl text-pink-600">Meet the Executive Board</h3>
        </header>
        <main className="text-neutral-900/75 grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Leader name="Delia Riley" position="President of Operations" src="delia-riley.JPG">
            <b>Graduation Year:</b> 2024<br />
            <b>Time in Sabercat Robotics:</b> Delia was on VEX and FRC teams, junior and senior year, respectively. She was mechanical during her time in VEX, also maintaining the engineering notebook. Her senior year, she was on the business team. She was on the Sisters in STEM executive board through all of high school.<br />
            <b>High School Accomplishments:</b> Delia was president of the Scottsdale Math & Science Academy and very involved with every aspect of the academy. She competed with CyberPatriot and loved AP Chemistry & Biology. She was also in the marching band, as Guard Captain.<br />
          </Leader>
          <Leader name="Leo Russo" position="Vice President of Operations" src="leo-russo.JPG">
            <b>Graduation Year:</b> 2024<br />
            <b>Time in Sabercat Robotics:</b> Joining his Junior year,  Leo has been a part of both the FRC and VEX teams. Leo joined the business team and earned a leadership title in outreach. He focused on writing essays for FRC awards and grants, along with designing social media for the team.<br />
            <b>High School Accomplishments:</b> Leo participated in many academic clubs, including the Math and Science Academy, the National Honors Society, and CyberPatriot. He was heavily focused on academics, while integrating his creativity into his endeavors. After completing Graphic Design courses, he noticed a need for design throughout his school. He received his certification in Graphic Design which allowed him to design logos and posters for the school.
          </Leader>
          <Leader name="Lindsay Baptiste" position="Volunteer Coordinator" src="laney-olson.webp">
            <b>Graduation Year:</b> 2024<br />
            <b>High School Accomplishments:</b> TBD
          </Leader>
          <Leader name="Aarohi Ghorpade" position="Creative Director" src="aarohi-ghorpade.JPG">
            <b>Graduation Year:</b> 2024<br />
            <b>High School Accomplishments:</b> TBD
          </Leader>
          {/* <Leader name="Fiona Riley" position="Unknown" src="laney-olson.webp">
            Description about Fiona Riley
          </Leader>
          <Leader name="Aashni Sahai" position="Unknown" src="laney-olson.webp">
            Description about Aashni Sahai
          </Leader>
          <Leader name="Rachel Parker" position="Unknown" src="laney-olson.webp">
            Description about Rachel Parker
          </Leader>
          <Leader name="Claire Filipowicz" position="Unknown" src="laney-olson.webp">
            Description about Claire Filipowicz
          </Leader>
          <Leader name="Niki Natt" position="Unknown" src="laney-olson.webp">
            Description about Niki Natt
          </Leader> */}
        </main>
        <footer className="text-center">
          <p className="mb-4">We wouldn&apos;t be here without our founders and those who came before us!</p>
          <LinkButton href="/leadership/past-leaders">Past Leadership</LinkButton>
        </footer>
      </main>
    </main>
  );
};