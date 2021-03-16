import React from "react";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Link from "next/link";

import Layout from "../components/Layout";
import Switch from "../components/Switch";
import PriceCard from "../components/PriceCard";

const Pricing = () => {
  const prices = [
    {
      plan: "Basic",
      info:
        "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
      monthly: "$19.00",
      yearly: "$190.00",
    },
    {
      plan: "Pro",
      info:
        "More advanced features available. Recommended for photography veterans and professionals.",
      monthly: "$39.00",
      yearly: "$390.00",
      active: true,
    },

    {
      plan: "Business",
      info:
        "Additional features available such as more detailed metrics. Recommended for business owners.",
      monthly: "$99.00",
      yearly: "$990.00",
    },
  ];
  const [billing, setBilling] = React.useState(false);
  const [monthly, setMonthly] = React.useState(false);
  const [yearly, setYearly] = React.useState(false);

  const switchBilling = (e) => {
    setBilling(e.target.checked);

    if (e.target.checked === true) {
      setYearly(true);
      setMonthly(false);
    } else {
      setYearly(false);
      setMonthly(true);
    }
  };

  return (
    <Layout>
      <div className="grid lg:grid-cols-12 md:grid-rows-1 md:grid-cols-6">
        <div className="relative flex items-center justify-center row-start-2 bg-black lg:col-span-5 md:col-span-4 md:row-start-1">
          <div className="absolute md:left-0 top-0 md:top-32 left-10 w-40 md:w-1.5 h-1.5 md:bg-gradient-to-b bg-gradient-to-r from-tertiary via-secondary to-primary md:h-72" />
          <Zoom>
            <div className="py-10 space-y-10 text-white md:py-0 w-80 md:w-96">
              <h1 className="heading">Pricing</h1>

              <p className="font-light">
                Create a your stories, Photosnap is a platform for photographers
                and visual storytellers. It’s the simple way to create and share
                your photos.
              </p>
            </div>
          </Zoom>
        </div>

        <Fade left>
          <div className="bg-cover h-294 md:h-490 lg:col-span-7 md:col-span-2 bg-hero2-sm lg:bg-hero2 md:bg-hero2-md" />
        </Fade>
      </div>

      <Zoom>
        <div className="my-20 md:my-32">
          <div className="flex justify-center">
            <div className="flex items-center space-x-6">
              <p
                className={`${
                  monthly ? "text-black" : "text-gray-400"
                } text-xl tracking-wider`}
              >
                Monthly
              </p>
              <Switch onChange={switchBilling} />
              <p
                className={`${
                  yearly ? "text-black" : "text-gray-400"
                } text-xl tracking-widest`}
              >
                Yearly
              </p>
            </div>
          </div>

          <div className="grid p-10 space-y-10 md:py-20 md:px-20 xl:px-40 lg:grid-cols-3 lg:space-y-0 lg:gap-7">
            {prices.map((price, idx) => {
              return <PriceCard key={idx} info={price} billing={billing} />;
            })}
          </div>
        </div>
      </Zoom>

      <div className="grid px-10 text-white bg-cover md:px-20 md:grid-cols-2 bg-beta-sm md:bg-beta-md lg:bg-beta h-288 md:280">
        <Zoom>
          <div className="flex items-center">
            <h1 className="text-3xl leading-normal tracking-widest uppercase md:w-11/12 lg:w-4/5 lg:text-5xl">
              We're in Beta. Get your invite today!
            </h1>
          </div>
        </Zoom>

        <Fade left>
          <div className="flex space-x-5 md:items-center md:justify-end">
            <Link href="/">
              <a className="tracking-widest text-white uppercase hover:underline">
                Get an invite
              </a>
            </Link>

            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
              <g fill="none" fillRule="evenodd" stroke="#fff">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </Fade>
      </div>
    </Layout>
  );
};

export default Pricing;
