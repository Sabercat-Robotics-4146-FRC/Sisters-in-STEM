"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "./ui/carousel";

export default function AutoplayCarousel({ delay, children }) {
  return (
    <Carousel plugins={[
      Autoplay({
        delay,
      }),
    ]}>
      {children}
    </Carousel>
  );
};