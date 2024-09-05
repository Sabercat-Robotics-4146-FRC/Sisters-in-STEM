"use client";
import { type ClassValue } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "./ui/carousel";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./misc";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { sendEmail } from "./server";

export function PathLink({ className, path, pathClass = "", ...linkProps }: React.ComponentProps<typeof Link> & { path: string; pathClass?: ClassValue }) {
  const currentPath = usePathname();

  return (
    <Link {...linkProps} className={cn(className, path === currentPath && pathClass)} />
  );
};

export function AutoplayCarousel({ delay, children }: { delay: number; children: React.ReactNode }) {
  return (
    <Carousel className="hover:cursor-grab active:cursor-grabbing" plugins={[
      Autoplay({
        delay,
      }),
    ]}>
      {children}
    </Carousel>
  );
};

const contactFormSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(1, {
    message: "Please enter a subject.",
  }).max(128, {
    message: "Please enter a subject that is less than or equal to 128 characters.",
  }),
  message: z.string().min(1, {
    message: "Please enter a message.",
  }),
});
export function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const [message, setMessage] = useState<string>();
  let timeout: NodeJS.Timeout;

  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    try {
      if (timeout) {
        clearTimeout(timeout);
      };
      setMessage("Sending...");
      const res = await sendEmail(data);
      setMessage(res);
      timeout = setTimeout(() => {
        setMessage(undefined);
      }, 10000);
    } catch(err) {
      console.warn(err);
      setMessage("Something went wrong. Please try again later.");
      timeout = setTimeout(() => {
        setMessage(undefined);
      }, 10000);
    };
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={
            ({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john.doe@example.com" {...field} />
                </FormControl>
                <FormDescription>
                  The email you would prefer us to contact you at.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }
        />
        <FormField
          control={form.control}
          name="subject"
          render={
            ({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="We're interested in..." {...field} />
                </FormControl>
                <FormDescription>
                  Subject of your message.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }
        />
        <FormField
          control={form.control}
          name="message"
          render={
            ({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Hello, we're XYZ school, and we are interested in..." {...field} />
                </FormControl>
                <FormDescription>
                  The message you would like for our team to receive.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )
          }
        />
        <Button type="submit" className="w-fit z-[1]">
          Submit
        </Button>
        <p className="text-base mt-3">
          {message}
        </p>
      </form>
    </Form>
  );
};