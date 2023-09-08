import { type NextPage } from "next";
import Footer from "~/components/ui/Footer";

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-zinc-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-3 p-5">
        <h1 className="text-3xl font-semibold mb-4">Helix Educational Programming Contest Platform - Privacy Policy</h1>

        <p className="mb-4">Last Updated: September 7, 2023</p>

        <p className="mb-4">
          Welcome to the Helix Educational Programming Contest Platform ("Helix"). Your privacy and data security are
          important to us. This Privacy Policy explains how we collect, use, and protect your personal information. By
          using Helix, you consent to the practices described in this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>

        <p className="mb-4">
          Helix collects the following information for the purposes described below:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">User Account Information:</span> When you create an account using Twitter,
            Google, GitHub, or Discord login, we collect your profile picture, display name, and email address. You may
            also choose to add additional information such as descriptions and links to your content.
          </li>
          <li>
            <span className="font-semibold">Forum Posts and Problem Solutions:</span> We collect data related to forum
            posts, problem solutions, and other user-generated content you submit on Helix.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>

        <p className="mb-4">
          We use the collected information for the following purposes:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-semibold">User Accounts:</span> To create and manage your user account, allowing you to
            participate in challenges, access educational content, and engage with the Helix community.
          </li>
          <li>
            <span className="font-semibold">Profile Information:</span> To display your profile picture, display name,
            descriptions, and links to your content on your Helix profile.
          </li>
          <li>
            <span className="font-semibold">Communication:</span> To communicate with you regarding your account,
            notifications, updates, and important platform-related information.
          </li>
          <li>
            <span className="font-semibold">Forum:</span> To facilitate discussions and interactions on our forum,
            including displaying your forum posts and contributions.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">3. Data Security</h2>

        <p className="mb-4">
          We take data security seriously. Helix employs reasonable security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or destruction.
        </p>

        {/* ... Repeat the same pattern for the rest of your content ... */}

        <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>

        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy, please contact us at asandei.stefanel@gmail.com or miihairadu@gmail.com.
        </p>

        <p className="mb-4">
          Thank you for using Helix. We are committed to protecting your privacy and providing a safe and educational
          platform for programming enthusiasts.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
