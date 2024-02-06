"use client";
import { createRef, useState } from "react";
import { validate } from "email-validator";
import { SendEmail } from "/server/email";

export default function EmailForm() {
  const ResponseRef = createRef();

  const [Email, SetEmail] = useState("");
  const [Message, SetMessage] = useState("");
  const [Subject, SetSubject] = useState("");
  const [InfoClasses, SetInfoClasses] = useState("hidden");

  async function HandleEmailEvent(Event) {
    if (Event) {
      Event.preventDefault();
    };
    const ResponseText = ResponseRef.current;
    if (ResponseText && ResponseText.classList) {
      SetInfoClasses("hidden");
      if (Email && Email.replace(/\s/g, "").length && validate(Email)) {
        if (Subject && Subject.replace(/\s/g, "").length) {
          if (Message && Message.replace(/\s/g, "").length) {
            ResponseText.innerText = "Attempting to send email...";
            SetInfoClasses("text-neutral-900");
            try {
              const EmailResponse = await SendEmail({
                Email: Email,
                Subject: Subject,
                Message: Message,
              });
              if (EmailResponse && EmailResponse.Success) {
                SetInfoClasses("text-green-500");
              } else {
                SetInfoClasses("text-red-500");
              };
              ResponseText.innerText = EmailResponse.Message || (!EmailResponse.Success ? "There was an error on our server when sending your email. Please try again with a valid email, or contact us via email (contact@sistersinstem.net)." : "Thank you for your email!");  
            } catch(Err) {
              console.warn(Err);
              SetInfoClasses("text-red-500");
              ResponseText.innerText = "There was an error on our server when sending your email. Please try again, or contact us via email (contact@sistersinstem.net).";
            };
          } else {
            SetInfoClasses("text-red-500");
            ResponseText.innerText = "The message that you provided was empty. Please try again with a valid message, or contact us via email (contact@sistersinstem.net).";  
          };
        } else {
          SetInfoClasses("text-red-500");
          ResponseText.innerText = "The subject that you provided was empty. Please try again with a valid subject, or contact us via email (contact@sistersinstem.net).";  
        };
      } else {
        SetInfoClasses("text-red-500");
        ResponseText.innerText = "The email that you provided was invalid. Please try again with a valid email, or contact us via email (contact@sistersinstem.net).";
      };
    };
  };

  return (
    <form onSubmit={HandleEmailEvent} className="w-full space-y-4 text-start">
      <section className="flex flex-col flex-wrap space-y-2">
        <label className="text-2xl font-medium text-pink-600" htmlFor="email">
          <h3>Email Address:</h3>
        </label>
        <main className="relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
          <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" inputMode="email" type="email" placeholder="Your email address" id="email" onInput={function(Event) {SetEmail(Event.target.value)}} />
          <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
              <title>Envelope Icon</title>
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path>
            </svg>
            <span className="sr-only">Envelope Icon</span>
          </div>
        </main>
      </section>
      <section className="flex flex-col flex-wrap space-y-2">
        <label className="text-2xl font-medium text-pink-600" htmlFor="subject">
          <h3>Subject:</h3>
        </label>
        <main className="relative flex flex-wrap items-strech w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
          <input className="order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" inputMode="text" type="text" id="subject" placeholder="Subject of your email" onInput={function(Event) {SetSubject(Event.target.value)}} />
          <div className="p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
              <title>Heading Icon</title>
              <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"></path>
            </svg>
            <span className="sr-only">Heading Icon</span>
          </div>
        </main>
      </section>
      <section className="flex flex-col flex-wrap space-y-2">
        <label className="text-2xl font-medium text-pink-600" htmlFor="message">
          <h3>Message:</h3>
        </label>
        <main className="relative flex flex-wrap items-center w-full border-2 transition-[border-color] duration-300 focus-within:border-pink-600">
          <textarea className="resize-none h-[6ch] order-1 bg-slate-100 flex-1 basis-auto p-3 w-[1%] focus:outline-none transition-[background-color] duration-300 focus:bg-slate-50 peer" inputMode="text" id="message" placeholder="Message content of your email" onInput={function(Event) {SetMessage(Event.target.value)}} />
          <div className="h-[6ch] p-3 bg-slate-100 fill-neutral-900 transition-[background-color,fill] duration-300 peer-focus:fill-pink-600 peer-focus:bg-slate-50 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 512 512">
              <title>Comment Icon</title>
              <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"></path>
            </svg>
            <span className="sr-only">Comment Icon</span>
          </div>
        </main>
      </section>
      <section className="relative flex flex-wrap items-strech w-full">
        <button className="z-[1] w-full transition-colors duration-500 text-pink-600 overflow-hidden border-2 px-6 py-3 leading-none border-pink-600 font-medium relative before:absolute before:h-full before:w-full before:-z-[1] before:scale-x-0 before:top-0 before:left-0 before:bg-pink-600 before:origin-left before:[transition:transform_500ms_0ms,transform-origin_0ms_500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right hover:text-slate-100 focus-visible:text-slate-100 mb-2" type="submit">Submit</button>
        <p ref={ResponseRef} className={`w-full ${InfoClasses} mt-2 leading-none`} id="Response"></p>
      </section>
    </form>
  );
};