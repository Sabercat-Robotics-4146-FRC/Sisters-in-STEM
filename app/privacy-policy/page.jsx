// WARNING!
// THIS PAGE SHOULD NOT BE CHANGED UNLESS OTHERWISE TOLD
// (CHANGES COULD LEAD TO LEGAL TROUBLE)
// BE CAREFUL WHEN EDITING!
import InlineLink from "@/components/inline-link";
import PageHeader from "@/components/page-header";

export default function Page() {
  return (
    <main className="px-3 min-[320px]:px-6 md:px-12 py-3 min-[320px]:py-6 md:py-12">
      <PageHeader title="Privacy Policy" description="Your privacy is as important to us as it is to you. That's why we tell you how we handle your data." src="/assets/img/sistersinstem.jpg" />
      <main className="px-6 min-[480px]:px-12">
        <header className="mb-2">
          <h2 className="text-3xl">Sisters in STEM Privacy Policy</h2>
          <p>Effective Date: November 7th, 2023</p>
        </header>
        <p className="mb-2">At Sisters in STEM, we are committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines our practices concerning the collection, use, and disclosure of personal information we receive from visitors to our website. Please take a moment to read this policy to understand how we handle your data.</p>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Information We Collect</h3>
            <p>When you visit our website, we may collect the following types of information:</p>
          </header>
          <ol className="marker:text-neutral-900 list-decimal">
            <li>
              <p>Personal Information: We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any other information you submit through our contact forms or registration processes.</p>
            </li>
            <li>
              <p>Non-Personal Information: We may automatically collect non-personal information about your visit, such as your IP address, browser type, operating system, and referring website. We may also collect data regarding your usage patterns on our website, including pages visited, time spent on the site, and other user interactions.</p>
            </li>
            <li>
              <p>Cookies: Like many websites, we use cookies to collect information about your browsing activities on our website. You can adjust your browser settings to refuse cookies or to notify you when cookies are being sent, but doing so may limit some functionalities of the website.</p>
            </li>
          </ol>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">How We Use Your Information</h3>
            <p>We use the information we collect for the following purposes:</p>
          </header>
          <ol className="marker:text-neutral-900 list-decimal">
            <li>
              <p>To Improve Our Website: We use non-personal information, including data collected through Google Analytics, to understand how our website is used and to make improvements based on user behavior.</p>
            </li>
            <li>
              <p>Communication: We may use your personal information to respond to your inquiries, provide updates about our non-profit organization, and send information about events, news, or other relevant content.</p>
            </li>
            <li>
              <p>Legal Compliance: We may use your information as necessary to comply with applicable laws and regulations or to protect our rights and interests.</p>
            </li>
          </ol>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Sharing Your Information</h3>
          </header>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We may share your personal information with trusted service providers, such as website hosting and maintenance providers, who assist us in operating our website and providing services to you. These service providers have access to your personal information only to the extent necessary to perform their functions on our behalf.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Google Analytics</h3>
          </header>
          <p>We use Google Analytics, a web analytics service provided by Google Inc., to collect and analyze information about the usage of our website. Google Analytics may use cookies and other tracking technologies to gather information about website visitors. You can learn more about Google's data practices and opt-out options by visiting Google's Privacy Policy and Terms of Service.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Security</h3>
          </header>
          <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Your Choices</h3>
          </header>
          <p>You can choose not to provide us with certain information, but this may limit your ability to access certain features of our website. You can also adjust your browser settings to reject cookies.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Children's Privacy</h3>
          </header>
          <p>Our website is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13 without parental consent. If you believe we have unintentionally collected personal information from a child under 13, please contact us to have the information removed.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Changes to this Privacy Policy</h3>
          </header>
          <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on our website, and the revised policy will take effect on the date posted.</p>
        </section>
        <section className="mb-2">
          <header className="mb-2">
            <h3 className="text-2xl">Contact Us</h3>
          </header>
          <p>If you have any questions or concerns about our Privacy Policy, or if you would like to request access to or correction of your personal information, please contact us at <InlineLink external href="mailto:contact@sistersinstem.net">contact@sistersinstem.net</InlineLink>.</p>
          <br />
          <p>Last Updated: November 7th, 2023</p>
          <br />
          <p>Sisters in STEM</p>
          <p>Saguaro High School</p>
          <a  target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 text-pink-600 hover:text-pink-700 focus-visible:text-pink-700">6250 N 82nd St</a>
          <p>Scottsdale, AZ 85250</p>
        </section>
      </main>
    </main>
  );
};