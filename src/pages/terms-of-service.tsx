import { type NextPage } from "next";
import Footer from "~/components/ui/Footer";

const TermsOfService: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-3 p-5">
        <h1 className="text-3xl font-semibold mb-4">Helix Educational Programming Contest Platform - Terms of Service</h1>

        <p className="mb-4">
          Last Updated: September 7, 2023
        </p>

        <p className="mb-4">
          Welcome to Helix, the educational programming contest organizing platform that provides educational content,
          Capture The Flag (CTF) challenges, and Data Structures & Algorithms (DS&A) problems. These Terms of Service
          ("Terms") outline the terms and conditions that govern your use of the Helix platform. Please read these Terms
          carefully before using Helix. By accessing or using the platform, you agree to be bound by these Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>

        <p className="mb-4">
          By accessing or using Helix, you agree to comply with and be bound by these Terms. If you do not agree to these
          Terms, please do not use Helix.
        </p>

        <h2 className="text-2xl font-semibold mb-2">2. User Eligibility</h2>

        <p className="mb-4">
          Helix is intended for use by individuals of any age as long as they have obtained parental consent or approval
          from their educational institution to use the platform. If you are under 13, you may use Helix with parental
          consent or educational institution approval. If you are between 13 and 17 years old, you must have permission
          from a parent or legal guardian to use Helix.
        </p>

        <h2 className="text-2xl font-semibold mb-2">3. User Accounts</h2>


        <p className="mb-4">
          3.1. You may be required to create a user account on Helix. You are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <p className="mb-4">
          3.2. You agree to provide accurate and complete information when creating your account and to keep your account information up to date.
        </p>

        <p className="mb-4">
          3.3. You are responsible for all activities that occur under your account.
        </p>

        <p className="mb-4">
          3.4. Helix reserves the right to suspend or terminate your account if we suspect any fraudulent, abusive, or unauthorized activity.
        </p>

        <h2 className="text-2xl font-semibold mb-2">4. Content</h2>

        <p className="mb-4">
          4.1. Helix provides educational content, CTF challenges, and DS&A problems for your learning and enjoyment.
        </p>

        <p className="mb-4">
          4.2. You may not copy, distribute, or reproduce any content from Helix without explicit permission, except for
          personal use and educational purposes.
        </p>

        <p className="mb-4">
          4.3. Helix content may not be used for commercial purposes or financial gain without written consent.
        </p>

        <h2 className="text-2xl font-semibold mb-2">5. User Conduct</h2>

        <p className="mb-4">
          5.1. You agree to use Helix in a manner that is lawful and in compliance with these Terms.
        </p>

        <p className="mb-4">
          5.2. You may not engage in any activity that disrupts, damages, or impairs the functionality of Helix or its servers.
        </p>

        <p className="mb-4">
          5.3. You may not use Helix to distribute or engage in any illegal or harmful activities.
        </p>

        <h2 className="text-2xl font-semibold mb-2">6. Privacy</h2>

        <p className="mb-4">
          6.1. Your use of Helix is also governed by our Privacy Policy, which outlines how we collect, use, and disclose your
          information. Please review our Privacy Policy for more details.
        </p>

        <h2 className="text-2xl font-semibold mb-2">7. Termination</h2>

        <p className="mb-4">
          7.1. Helix reserves the right to suspend or terminate your access to the platform at any time, for any reason, with
          or without notice.
        </p>

        <p className="mb-4">
          7.2. You may terminate your account by contacting Helix support.
        </p>

        <h2 className="text-2xl font-semibold mb-2">8. Modifications to Terms</h2>

        <p className="mb-4">
          8.1. Helix may update or modify these Terms from time to time. Any changes will be posted on the platform, and it is
          your responsibility to review these Terms periodically.
        </p>

        <h2 className="text-2xl font-semibold mb-2">9. Disclaimer of Warranties</h2>

        <p className="mb-4">
          9.1. Helix provides the platform "as is" and makes no warranties or representations regarding the accuracy,
          completeness, or reliability of the content or the platform itself.
        </p>

        <h2 className="text-2xl font-semibold mb-2">10. Limitation of Liability</h2>

        <p className="mb-4">
          10.1. Helix shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or
          any loss of profits or revenues, arising out of or related to your use or inability to use Helix.
        </p>

        <h2 className="text-2xl font-semibold mb-2">11. Governing Law</h2>

        <p className="mb-4">
          11.1. These Terms shall be governed by and construed in accordance with the laws of Romania.
        </p>

        <h2 className="text-2xl font-semibold mb-2">12. Contact Us</h2>

        <p className="mb-4">
          12.1. If you have any questions or concerns about these Terms, please contact us at asandei.stefanel@gmail.com or miihairadu@gmail.com.
        </p>

        <p className="mb-4">
          By using Helix, you acknowledge that you have read, understood, and agree to these Terms of Service. If you do not
          agree to these Terms, please do not use Helix. Thank you for using Helix!
        </p>

      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
