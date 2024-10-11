import React from "react";

const Terms = () => {
  const updateDate = "08 October 2024";
  return (
    <div className="bg-black h-3/5 flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mt-5">
      {" "}
      <p className="text-2xl pt-2 font-display border-b border-[#00FEFB] mb-20">
        Privacy Policy
      </p>
      <h3 className="font-display text-6xl mb-6">Privacy Policy</h3>
      <p className="mb-5 font-sans text-lg"> Last update {updateDate}</p>
      <p className="mb-8 font-sans text-lg">
        {" "}
        At FlexFi, the protection of your personal data is paramount. This
        privacy policy explains how we collect, use, and protect your personal
        information.
      </p>
      <ul className="mb-10">
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">
            1. Information Collection
          </h4>
          <p className="font-sans text-lg">
            We collect the following information when you use our platform:
            <br />
            - **Personal Information**: Your name, email address, and other
            information provided when creating your account.
            <br />
            - **Transaction Data**: Details of transactions made through FlexFi,
            including the cryptocurrencies used, amounts, and payment dates.
            <br />
            - **Technical Data**: Information about your device, IP address, and
            browsing data on our site.
            <br />
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">2. Use of Information</h4>
          <p className="font-sans text-lg">
            We use your information to:
            <br />
            - Provide access to our services and manage your account.
            <br />
            - Process your transactions and ensure the security of your
            payments.
            <br />
            - Send you updates and notifications about your account and our
            services.
            <br />- Improve our services and analyze usage trends.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">3. Information Sharing</h4>
          <p className="font-sans text-lg">
            We only share your personal information with third parties in the
            following cases:
            <br />
            - When necessary to process your transactions (e.g., with business
            partners).
            <br />
            - To comply with legal or regulatory obligations.
            <br />- With your explicit consent.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">4. Data Security</h4>
          <p className="font-sans text-lg">
            We implement technical and organizational security measures to
            protect your information from unauthorized access, disclosure, or
            loss. However, no method of electronic transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">5. Data Retention</h4>
          <p className="font-sans text-lg">
            We retain your personal data for as long as necessary to provide our
            services or to comply with legal obligations.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">6. Your Rights</h4>
          <p className="font-sans text-lg">
            You have the right to:
            <br />
            - Access your personal information and request its correction or
            deletion.
            <br />- Restrict or object to the processing of your personal data
            in certain circumstances.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">7. Cookies</h4>
          <p className="font-sans text-lg">
            FlexFi uses cookies to improve your experience on our website and
            analyze how our services are used. You can manage your cookie
            preferences through your browser settings.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">
            8. Changes to the Privacy Policy
          </h4>
          <p className="font-sans text-lg">
            We reserve the right to modify this privacy policy at any time.
            Changes will be posted on this page, and it is your responsibility
            to review it regularly.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">9. Contact</h4>
          <p className="font-sans text-lg">
            For any questions regarding this privacy policy or your rights,
            please contact us at: contact@flex-fi.io
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Terms;
