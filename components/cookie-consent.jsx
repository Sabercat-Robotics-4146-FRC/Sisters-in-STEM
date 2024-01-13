// Cookie consent for the whole website
// Does not appear when cookie consent has been approved or declined
// To-do: add "advanced" consent option (allows you to pick and choose what cookies you want to and don't want to accept)
"use client";
import { useCookies } from "next-client-cookies";
import { useEffect } from "react";

export default function CookieConsent() {
  const CookieStore = useCookies();
  const ConsentCookies = [
    "AcceptAll",
    "DeclineNonessential",
  ];

  function AcceptAll() {
    CookieStore.set("Consent", ConsentCookies[0], {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
    window.gtag("consent", "update", {
      "ad_storage": "granted",
      "analytics_storage": "granted",
    });
    document.getElementById("CookieConsent").classList.toggle("opacity-0");
    setTimeout(function() {
      document.getElementById("CookieConsent").remove();
    }, 500);
  };
  function DeclineNonessential() {
    CookieStore.set("Consent", ConsentCookies[1]);
    document.getElementById("CookieConsent").classList.toggle("opacity-0");
    setTimeout(function() {
      document.getElementById("CookieConsent").remove();
    }, 500);
  };

  useEffect(function() {
    if (CookieStore.get("Consent") === ConsentCookies[0]) {
      window.gtag("consent", "update", {
        "ad_storage": "granted",
        "analytics_storage": "granted",
      });
    };
  });

  if (ConsentCookies.indexOf(CookieStore.get("Consent")) < 0) {
    return (
      <section className="transition-opacity duration-500 bg-white px-4 py-4 shadow-black shadow-[0_8px_16px] w-full flex flex-col flex-wrap xl:flex-row xl:flex-nowrap justify-center items-center xl:justify-between fixed bottom-0 z-50" id="CookieConsent">
        <p>This website uses cookies to help improve your experience.</p>
        <nav className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
          <button className="overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-pink-600 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-pink-600 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right" onClick={DeclineNonessential}>Decline Non-essential Cookies</button>
          <button className="overflow-clip text-neutral-900 border-2 px-6 py-3 leading-none border-pink-600 font-medium relative transition-colors duration-500 hover:text-slate-100 focus-visible:text-slate-100 before:absolute before:h-full before:w-full before:scale-x-0 before:inset-0 before:bg-pink-600 before:-z-[1] before:origin-left before:transition-[transform,transform-origin] before:duration-[500ms,0ms] before:delay-[0ms,500ms] hover:before:scale-x-100 hover:before:origin-right focus-visible:before:scale-x-100 focus-visible:before:origin-right" onClick={AcceptAll}>Accept All</button>
        </nav>
      </section>
    );
  };
};