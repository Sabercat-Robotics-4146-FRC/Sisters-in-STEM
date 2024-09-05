import { slides } from "~/components/constants";
import { Button } from "~/components/misc";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "~/components/ui/dialog";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-3 min-[320px]:px-6 md:px-12 text-start mb-6">
        <h2 className="text-5xl text-pink-600 font-semibold">The Sisters in STEM Archive: Experiments</h2>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-4">
          <p className="text-neutral-900">To view the instructions for an experiment, expand the Google Slide, click the three dots at the bottom of the slide, and then click &quot;Open Speaker Notes.&quot;</p>
        </header>
        <main className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-center gap-4">
          {
            slides.map(function(slide) {
              return (
                <Card key={slide.id}>
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      {slide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent> 
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-fit z-[1]">
                          View Google Slide
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="h-[75vw] sm:h-[50vw] max-w-[90vw] max-h-[90vh] flex flex-col gap-2">
                        <DialogTitle>
                          {slide.title}
                        </DialogTitle>
                        <DialogDescription>
                          {slide.title}
                        </DialogDescription>
                        <iframe src={`https://docs.google.com/presentation/d/${slide.id}/embed`} className="w-full h-full" />
                      </DialogContent>
                    </Dialog>
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