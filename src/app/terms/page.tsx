import React from "react";

const Terms = () => {
  const updateDate = "08 October 2024";
  return (
    <div className="bg-black h-3/5 flex flex-col items-start justify-between px-4 md:px-12 lg:px-32 mt-5">
      {" "}
      <p className="text-2xl pt-2 font-display border-b border-[#00FEFB] mb-20">
        Terms of Use
      </p>
      <h3 className="font-display text-4xl mb-6">Terms of Use</h3>
      <p className="mb-5 font-sans text-lg"> Last update {updateDate}</p>
      <p className="mb-8 font-sans text-lg">
        {" "}
        Welcome to FlexFi! By using our platform, you agree to these terms of
        use. Please read them carefully before using our service.
      </p>
      <ul className="mb-10">
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">1. Acceptance of Terms</h4>
          <p className="font-sans text-lg">
            By accessing FlexFi, you agree to be bound by these terms of use and
            all applicable laws and regulations. If you do not agree with these
            terms, you must not use the platform.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">2. Services Offered</h4>
          <p className="font-sans text-lg">
            FlexFi provides buy now, pay later (BNPL) services via
            cryptocurrencies. We reserve the right to modify or discontinue any
            service at any time without notice. FlexFi is not liable for any
            suspension or interruption of service.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">3. Account Creation</h4>
          <p className="font-sans text-lg">
            To use FlexFi, you must create an account by providing a valid email
            address and following the registration steps. You are responsible
            for maintaining the confidentiality of your credentials and for any
            activity that occurs under your account.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">4. Payment Terms</h4>
          <p className="font-sans text-lg">
            - To use our BNPL service, you must have cryptocurrencies compatible
            with FlexFi.
            <br /> - Installment payments are subject to fees and interest as
            indicated at the time of transaction.
            <br /> - You are required to meet the payment deadlines. In the
            event of non-payment, FlexFi reserves the right to withdraw staked
            funds to cover the amounts due.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">5. Acceptable Use</h4>
          <p className="font-sans text-lg">
            You agree to use FlexFi in a lawful manner and in compliance with
            all applicable regulations. You must not use the platform for
            fraudulent or illegal activities.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">
            6. Limitation of Liability
          </h4>
          <p className="font-sans text-lg">
            FlexFi is not responsible for any losses or damages resulting from
            the use of the platform, including, but not limited to, the loss of
            cryptocurrencies, suspension of your account, or any other indirect
            damages.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">7. Termination</h4>
          <p className="font-sans text-lg">
            FlexFi may suspend or terminate your account at any time if you
            violate these terms. You may also terminate your account at any time
            by contacting our customer service.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">1. Acceptance of Terms</h4>
          <p className="font-sans text-lg">
            By accessing FlexFi, you agree to be bound by these terms of use and
            all applicable laws and regulations. If you do not agree with these
            terms, you must not use the platform.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">8. Changes to Terms</h4>
          <p className="font-sans text-lg">
            FlexFi reserves the right to modify these terms at any time. Changes
            will take effect upon being posted on this page. It is your
            responsibility to regularly review the terms of use.
          </p>
        </li>
        <li className="mb-8">
          <h4 className="mb-4 font-display text-xl">9. Contact</h4>
          <p className="font-sans text-lg">
            For any questions regarding these terms, you can contact us at:
            contact@flex-fi.io
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Terms;
