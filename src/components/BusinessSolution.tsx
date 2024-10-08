import { usePageStore } from "@/store/usePageStore";
import { GetStartedButton } from "./GetStartedButton";

export const BusinessSolution = () => {
  const { isShopper } = usePageStore();
  return (
    <div className=" bg-black p-6 sm:p-8 md:px-32 rounded-lg shadow-2xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left section - Phone and Desktop view */}
      <img
        src="/images/flexfi-payment-solution-adaptable-sales-channels-.webp"
        alt="Mobile UI"
        className="  w-80 xl:size-2/4 transform transition duration-500 hover:scale-105 hover:rotate-2 rounded-3xl"
      />

      {/* Right section - Information */}
      <div className="text-white lg:w-1/2">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-8 lg:mb-12">
          Adaptable Payments
          <br /> for Every Channel
        </h2>
        <ul className="space-y-6 flex flex-col gap-1 lg:mb-12">
          <li className="flex items-start">
            <div>
              <h3 className="font-display sm:text-lg font-semibold">
                {!isShopper ? "E-commerce" : "Simple and Fast : E-commerce"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Fast online payment: your customers complete transactions in
                less than 10 seconds.`
                  : "Pay for your online purchases with FlexFi in just a few clicks. Choose your payment plan and split your costs, all in under 10 seconds."}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold">
                {!isShopper ? "Point of Sale" : "In-Store: Effortless Payment"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Effortless payments via payment link or terminal, directly at
                your point of sale.`
                  : "Use FlexFi in-store via a payment terminal or a secure payment link. Split your payment easily, with no paperwork needed."}
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div>
              <h3 className="font-display text-base sm:text-lg font-semibold">
                {!isShopper
                  ? "Remote Sales"
                  : "Remote Purchases: Convenient and Flexible"}
              </h3>
              <p className="text-gray-200 text-base sm:text-xl">
                {!isShopper
                  ? `Your customers receive a payment link via email or SMS,
                anywhere, anytime.`
                  : `Whether you’re buying over the phone or placing a remote order, FlexFi lets you pay through a link sent via email or SMS. Flexibility at your fingertips, wherever you are.`}
              </p>
            </div>
          </li>
        </ul>
        <GetStartedButton />
      </div>
    </div>
  );
};
