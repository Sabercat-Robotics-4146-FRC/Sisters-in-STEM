"use client";
import Image from "next/image";
import Link from "next/link";
import { createRef, useState } from "react";
import { validate } from "email-validator";

export default function Page() {
  const ResponseRef = createRef();

  const [Email, SetEmail] = useState();
  const [Message, SetMessage] = useState();
  const [Subject, SetSubject] = useState();
  const [InfoClasses, SetInfoClasses] = useState("hidden");

  async function SendEmail() {
    const ResponseText = ResponseRef.current;
    if (ResponseText && ResponseText.classList) {
      SetInfoClasses("hidden");
      if (Email && Email.replace(/\s/g, "").length && validate(Email)) {
        if (Subject && Subject.replace(/\s/g, "").length) {
          if (Message && Message.replace(/\s/g, "").length) {
            ResponseText.innerText = "Attempting to send email...";
            SetInfoClasses("text-neutral-900");
            const EmailRequest = await fetch("/api/send-email", {
              method: "POST",
              body: JSON.stringify({
                Email: Email,
                Subject: Subject,
                Message: Message,
              }),
            }).catch(function(Err) {
              console.warn(Err);
              SetInfoClasses("text-red-500");
              ResponseText.innerText = "There was an error with your internet connection. Please try again.";
            });
            if (EmailRequest.ok) {
              const EmailResponse = await EmailRequest.json();
              if (EmailResponse && EmailResponse.Success) {
                SetInfoClasses("text-green-500");
              } else {
                SetInfoClasses("text-red-500");
              };
              ResponseText.innerText = EmailResponse.Message || (!EmailResponse.Success ? "There was an error on our server when sending your email. Please try again, or contact our email team@sabercatrobotics.com if you think this was a mistake." : "Thank you for your email!");
            } else {
              SetInfoClasses("text-red-500");
              ResponseText.innerText = "There was an error on our server when sending your email. Please try again, or contact our email team@sabercatrobotics.com if you think this was a mistake.";  
            };
          } else {
            SetInfoClasses("text-red-500");
            ResponseText.innerText = "The message you provided was empty. Please try again with a valid message, or contact our email team@sabercatrobotics.com if you think this was a mistake.";  
          };
        } else {
          SetInfoClasses("text-red-500");
          ResponseText.innerText = "The subject you provided was empty. Please try again with a valid subject, or contact our email team@sabercatrobotics.com if you think this was a mistake.";  
        };
      } else {
        SetInfoClasses("text-red-500");
        ResponseText.innerText = "The email that was provided was invalid. Please try again with a valid email, or contact our email team@sabercatrobotics.com if you think this was a mistake.";
      };
    };
  };
  
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/15.jpg" alt="Contact Us" width={672} height={228} quality={100} loading="eager" priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold drop-shadow-[0_0_10px_black]">Contact Us</h2>
        <p className="text-white/75 text-xl font-medium drop-shadow-[0_0_10px_black]">If you ever have any inquries, feel free to reach out to us! We typically respond in 3 - 5 business days.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <header className="text-neutral-900 mb-4">
          <h2 className="text-3xl">Methods of Contact</h2>
          <p>Depending on who you want to contact, there are different ways to go about it. We'll show you each way you can go about it, so then we both can have a pleasant conversation and experience.</p>
        </header>
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">Contacting the Team</h2>
          </header>
          <p>We have done our best to make contacting our team as easy as possible. That's why we created a contact form that can be filled out within a minute. Simply go to the bottom of the page, fill out each field, and click the "Submit" button.</p>
        </section>
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">Contacting a Specific Person</h2>
          </header>
          <p className="mb-2">If you ever need to contact a specific person, we have the perfect solution for you. Simply go to the <Link href="/members" className="transition-colors duration-300 text-pink-600 hover:text-pink-700 focus-visible:text-pink-700">members</Link> page, find the person you're trying to contact, and click the link next to the text "email," which should be found under their name. Note that only coaches and mentors are listed on this page; for security and privacy reasons, we do not store the information of the children in our program, and there is no way to contact them via our website.</p>
        </section>
        <main className="flex flex-col flex-wrap justify-center items-center text-center">
          <header className="w-full sm:w-1/2 px-4 mb-4">
            <h2 className="mb-4 font-medium text-3xl text-neutral-900">Contact Us</h2>
          </header>
          <main className="w-full lg:w-1/2">
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
              <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" type="email" placeholder="Your email address" onInput={function(Event) {SetEmail(Event.target.value)}} />
              <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Envelope Icon</title>
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
                </svg>
                <span className="sr-only">Envelope Icon</span>
              </div>
            </section>
            <section className="mb-4 relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
              <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" type="text" placeholder="Subject of your email" onInput={function(Event) {SetSubject(Event.target.value)}} />
              <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Heading Icon</title>
                  <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"></path>
                </svg>
                <span className="sr-only">Heading Icon</span>
              </div>
            </section>
            <section className="mb-4 relative flex flex-wrap items-center w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
              <textarea className="resize-none h-[6ch] order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" placeholder="Message content of your email" onInput={function(Event) {SetMessage(Event.target.value)}} />
              <div className="h-[6ch] p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
                  <title>Comment Icon</title>
                  <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
                </svg>
                <span className="sr-only">Comment Icon</span>
              </div>
            </section>
            <section className="relative flex flex-wrap items-strech w-full">
              <button className="w-full overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-pink-600 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-pink-600 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right" onClick={SendEmail}>Submit</button>
              <p ref={ResponseRef} className={`w-full ${InfoClasses} mt-2 leading-none`} id="Response"></p>
            </section>
          </main>
        </main>
      </main>
    </main>
  );
};