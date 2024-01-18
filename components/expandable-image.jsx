"use client";
import Image from "next/image";
import { createRoot } from "react-dom/client";
import { cn } from "/lib/utils";
import { useState } from "react";

export function ExpandImage(Event, [Loading, SetLoadingState]) {
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
          {
            Loading ? <div role="status">
              <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-pink-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div> : ""
          }
          <img srcSet={ButtonImage.srcset} src={ButtonImage.src} sizes="(min-width: 640px) 50vw, 75vw" alt={ButtonImage.alt} width={ButtonImage.width} height={ButtonImage.height} className="h-[75vw] sm:h-[50vw] max-h-[90%] w-auto" onLoad={function(Event) {
            SetLoadingState(!Event.currentTarget.complete);
          }} />
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

export default function ExpandableImage({ src, alt, width, height, sizes, className, buttonClassName }) {
  const [Loading, SetLoadingState] = useState(false);
  return (
    <button onClick={function(Event) {
      ExpandImage(Event, [Loading, SetLoadingState]);
    }} className={cn("object-cover overflow-clip w-full lg:h-full", buttonClassName)}>
      <Image sizes={sizes} src={src} alt={alt} width={width} height={height} className={cn("transition-transform duration-500 hover:scale-105 focus-visible:scale-105 object-cover h-full w-full", className)} />
    </button>
  );
};