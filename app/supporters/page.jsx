"use client";
import PageHeader from "/components/page-header";
import Image from "next/image";
import { createRoot } from "react-dom/client";

export default function Page() {
  function ExpandImage(Event) {
    if (Event?.currentTarget) {
      const Button = Event.currentTarget;
      if (Button.childElementCount === 1) {
        const ButtonImage = Button.children[0];
        const Expanded = document.createElement("div");
        Expanded.className = "z-50 fixed top-0 w-full h-full bg-black/75 flex flex-col flex-wrap justify-center items-center transition-opacity duration-300 opacity-0";
        const ExpandedRoot = createRoot(Expanded);
        ExpandedRoot.render(
          <>
            <button type="button" className="absolute top-0 right-0 mr-2 w-max h-max" onClick={function() {
              Expanded.classList.add("opacity-0");
              Expanded.classList.remove("opacity-100");
              setTimeout(function() {
                Expanded.remove();
              }, 300);
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" height="3rem" viewBox="0 0 384 512" className="fill-white">
                <title>X Icon</title>
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
              </svg>
              <p className="sr-only">Close</p>
            </button>
            <img srcSet={ButtonImage.srcset} src={ButtonImage.src} sizes={ButtonImage.sizes} alt={ButtonImage.alt} width={ButtonImage.width} height={ButtonImage.height} className="h-[75vw] sm:h-[50vw] max-h-[90%] w-auto"></img>
            <p className="text-white text-xl text-center w-3/4 sm:w-1/2">{ButtonImage.alt}</p>
          </>
        );
        document.body.appendChild(Expanded);
        setTimeout(function() {
          Expanded.classList.add("opacity-100");
          Expanded.classList.remove("opacity-0");
        });
      };
    };
  };

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
          <main className="flex flex-col flex-wrap lg:h-[360px] lg:flex-row lg:flex-nowrap justify-center items-center px-8">
            <button onClick={ExpandImage} className="object-cover w-full lg:h-full">
              <Image sizes="(min-width: 1024px) 40vw, 100vw" src="/assets/img/sistersinstem.jpg" alt="Picture 1 of our volunteers" width={360} height={240} className="rounded-t-xl lg:rounded-r-none lg:rounded-l-xl object-cover h-full w-full"></Image>
            </button>
            <button onClick={ExpandImage} className="object-cover w-full lg:h-full">
              <Image sizes="(min-width: 1024px) 40vw, 100vw" src="/assets/img/volunteers.webp" alt="Picture 2 of our volunteers" width={360} height={240} className="rounded-b-xl lg:rounded-l-none lg:rounded-r-xl object-cover h-full w-full"></Image>
            </button>
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