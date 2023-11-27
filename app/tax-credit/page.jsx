import Image from "next/image";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <header className="relative w-full m-auto px-5 py-20 text-center mb-6">
        <Image className="absolute inset-0 h-full w-full object-cover -z-[1] brightness-50 rounded-xl sm:rounded-3xl" src="/assets/img/tax-credit-generic.jpg" alt="Tax Credit" width={256} height={368} quality={100} priority></Image>
        <h2 className="text-slate-100 text-4xl font-semibold">Tax Credit</h2>
        <p className="text-white/75 text-xl font-medium">We are a 501(c)-3 organization. Tax Credit sets Arizona apart in education funding. Let's take advantage of it.</p>
      </header>
      <main className="px-6 min-[480px]:px-12">
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">What does tax credit do for <span className="text-yellow-500">you</span>?</h2>
          </header>
          <p>When donating to a school through tax-credit, you will receive a receipt that writes-off your donation, meaning you can help out local students without any loss to yourself!</p>
        </section>
        <section className="text-neutral-900/80 mb-4">
          <header className="text-neutral-900">
            <h2 className="text-3xl">What does tax credit do for <span className="text-yellow-500">us</span>?</h2>
          </header>
          <p>Your contribution will be used to pay for registration fees for Regional and World competitions (which require air-travel), as well as the many different materials necessary to build our robots. Your donation will also allow us to continue to mentor other teams and impact our community through our many outreach programs.</p>
        </section>
        <section className="text-neutral-900/80 mb-4">
          <header className="mb-2">
            <h2 className="text-neutral-900 text-3xl">How to donate through tax credit</h2>
            <p>Depending on what you prefer, you can either support us through tax credit by submitting a digital form, or by sending SUSD a phsyical form. We'll go over both ways, so you can easily do it how you want to.</p>
          </header>
          <section className="mb-2">
            <header className="text-neutral-900">
              <h3 className="text-2xl">How to donate through tax credit digitally</h3>
            </header>
            <ol className="list-decimal">
              <li>
                <p className="inline">Go to the <a href="https://www.susd.org/Page/453" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">SUSD Tax Credit page</a>.</p>
              </li>
              <li>
                <p className="inline">After reading the information about tax credit, click on the <q className="font-semibold">Donate Now</q> button at the top of the page.</p>
              </li>
              <li>
                <p className="inline">In the <i>SCHOOL</i> drop-down menu on the next screen, select <q className="font-semibold">Saguaro High School</q>.</p>
              </li>
              <li>
                <p className="inline">In the <i>ITEM</i> drop-down menu on the same screen, scroll down and select <q className="font-semibold">ROBOTICS-TAX CREDIT (T869)</q>.</p>
              </li>
              <li>
                <p className="inline">Input the amount of your donation.</p>
              </li>
              <li>
                <p className="inline">Click the blue <q className="text-sky-500">BUY</q> button.</p>
              </li>
              <li>
                <p className="inline">Click the <q className="text-stone-500">CHECKOUT</q> button.</p>
              </li>
              <li>
                <p className="inline">Click the <q className="text-sky-500">PAY</q> button on the next screen and follow the remaining prompts to make an online payment. You will have an option to print your receipt for the donation for use with your tax return.</p>
              </li>
            </ol>
          </section>
          <section>
            <header className="text-neutral-900">
              <h3 className="text-2xl">How to donate through tax credit physically</h3>
            </header>
            <ol className="list-decimal">
              <li>
                <p className="inline">Go to the <a href="https://www.susd.org/Page/453" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-yellow-500 hover:text-yellow-600 focus-visible:text-yellow-600">SUSD Tax Credit page</a>.</p>
              </li>
              <li>
                <p className="inline">Scroll down to where it says <q className="font-semibold">Tax Credit Documents</q> on the right hand side.</p>
              </li>
              <li>
                <p className="inline">Click on the document titled <q className="font-semibold">2023-2024 Tax Credit Form - English</q>.</p>
              </li>
              <li>
                <p className="inline">Under the header <q className="font-semibold">Contributor's Information</q>, fill out your information and check the maximum dollar amount that best applies to you.</p>
              </li>
              <li>
                <p className="inline">Under step 2 (<q className="font-semibold">Select schools(s) from the list below</q>), mark the line next to <q>Saguaro HS</q>.</p>
              </li>
              <li>
                <p className="inline">Under step 3 (<q className="font-semibold">Select preference</q>), mark the line next to <q>Activity from Preference list</q> and write down next to <q className="font-semibold">Saguaro Sabercat Robotics Team 4146</q> next to activity.</p>
              </li>
              <li>
                <p className="inline">Mail the form and check of your contribution to the physical address listed at the bottom of the form.</p>
              </li>
            </ol>
          </section>
        </section>
      </main>
    </main>
  );
};