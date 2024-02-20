import ExpandableIframe from "/components/expandable-iframe";
import PageHeader from "/components/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "/components/ui/card";

const Slides = [
  {
    id: "1pSwUfau4lwKTJLT880zYE_qz4AogS7SRXfMH30wvz-g",
    title: "What are Waves?",
  },
  {
    id: "1D3NU8wO0U-deCViU0WxjQiJNYrwfbpDtBwZ5zCufPbU",
    title: "What are Bubbles?",
  },
  {
    id: "1hUkWNnAQQbvTTgLTWbIviid878jFdPnztMmbA2YC5Y8",
    title: "Super Sound Popper",
  },
  {
    id: "1lY8jDmBWReQTY4hoMCBf6yzadi6IVUkq1P59-5pfyXE",
    title: "Step Through a Notecard",
  },
  {
    id: "1fY6P8J72ljxecZxeg8xDVDK1a0bpic2TJVFwaBB0myo",
    title: "Oil Spills: What and How?",
  },
  {
    id: "1K-VCksn6BegxRb9bRJaiNSNfMLhQEidIzKrlQvuVwKc",
    title: "Make Your Own Pan Flute",
  },
  {
    id: "1aQ9Q1QnBR1_GEnMiBSSsrtYtnmDJpURSVsOtVVYRSNA",
    title: "Make Your Own Lava Lamp",
  },
  {
    id: "1ZPZA46iYKGpVQyz4Xgx095j_u_TlyJsWU3T_LODAglk",
    title: "How Does Temperature Work?",
  },
  {
    id: "1dEST_NE63wYiaMKypOoe7aq4cvdN2g4buhVtf5zOxjw",
    title: "Hot Chocolate & Temperature",
  },
  {
    id: "1RIji0IKX3MRO5_a-3epo6nWEwIs7iRsIAKgS_VO84PM",
    title: "Engineering Bridges",
  },
  {
    id: "1J0mOYF8dptchamZ7uHYblWCM4oSpBTNYxBnjBnKD9dw",
    title: "Create Your Own Balancing Buddy",
  },
  {
    id: "1qF_U8-frs3hTBgQuNYo6Ta0U98cVHUNJGGu6PXtgspw",
    title: "Catapults: What and How?",
  },
  {
    id: "1XSfvZVKFCb7NCPcmhjHz6Gg8Ran2Jkd-E0Guztp1o-M",
    title: "Build a Bridge With Engineering",
  },
  {
    id: "1IZ3Vr2JzKCNxHnwEgSUx7KYS3F5tr4gkODkRfgyMqDU",
    title: "Blowing Up a Balloon With Chemistry",
  },
];
export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Archived Experiments" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <p className="text-neutral-900">To view the instructions for an experiment, expand the Google Slide, click the three dots at the bottom of the slide, and then click "Open Speaker Notes."</p>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
          {
            Slides.map(function(Slide) {
              return (
                <Card key={Slide.id}>
                  <CardHeader>
                    <CardTitle>
                      {Slide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent> 
                    <ExpandableIframe src={`https://docs.google.com/presentation/d/${Slide.id}/embed`}>
                      View Google Slide
                    </ExpandableIframe>
                  </CardContent>
                </Card>
              );
            })
          }
        </main>
      </main>
    </main>
  );
};