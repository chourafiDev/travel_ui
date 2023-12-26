import { Metadata } from "next";
import { HiChevronRight } from "react-icons/hi";

export const metadata: Metadata = {
  title: "Elite Travel | Privacy Policy",
};

export default async function Page() {
  return (
    <main className="lg:px-20 md:px-12 px-3 py-16 bg-[#F7F7F7] dark:bg-dark-4">
      <div className="bg-gradient rounded-4 md:py-6 py-4 shadow-xl shadow-gray/5 mb-10">
        <h1 className="text-white font-semibold md:text-5xl text-2xl text-center">
          Privacy Policy
        </h1>
      </div>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        Thank you for choosing to visit Elite Travel (the
        &quot;elitetravel.com&quot;). Your privacy is important to us, and we
        are committed to protecting the personal information you provide. This
        Privacy Policy outlines how we collect, use, disclose, and safeguard
        your information.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Information We Collect :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        We collect personal information you provide, such as your name, contact
        details, and payment information, to facilitate travel bookings and
        improve our services. Additionally, we may gather non-personal
        information like device data and cookies to enhance your user
        experience.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        How We Use Your Information :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        We use your personal information to process bookings, provide customer
        support, and send important updates. Non-personal information helps us
        analyze website usage, tailor content, and detect potential issues.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Information Sharing :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        We may share your information with trusted partners (e.g., airlines,
        hotels) to fulfill bookings. We may also disclose information if
        required by law or to protect our rights.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Security Measures :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        We employ industry-standard security measures to safeguard your data
        from unauthorized access and ensure secure transactions.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Cookies and Tracking Technologies :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        Cookies enhance your browsing experience and help us improve our
        services. You can manage cookie preferences through your browser
        settings.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Your Choices :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        You can update your account information and communication preferences.
        Opt-out of promotional emails by following the instructions in the
        emails.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Children&apos; Privacy :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        Our services are not intended for individuals under 13 years old. We do
        not knowingly collect information from children.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Changes to this Privacy Policy :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        This policy may be updated periodically. Check the effective date for
        the latest version.
      </p>

      <h2 className="text-dark dark:text-white font-semibold text-xl mb-2 flex items-center gap-3">
        <div className="bg-gradient w-6 h-6 rounded-full flex justify-center items-center">
          <HiChevronRight className="text-white" />
        </div>
        Contact Us :
      </h2>

      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        For questions or concerns regarding this Privacy Policy, please contact
        us at support@elitetravel.com.
      </p>
      <p className="text-dark/50 dark:text-white/50 font-normal mb-8">
        Thank you for choosing Elite Travel. Your privacy is important to us.
      </p>
    </main>
  );
}
