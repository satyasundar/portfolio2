import React from "react";
import { RxCopy } from "react-icons/rx";
import { SiAntdesign } from "react-icons/si";
import { FaChartPie, FaConnectdevelop } from "react-icons/fa";
import OfferCard from "./OfferCard";

const Offers = () => {
  return (
    <div className="bg-[#0F1113] text-white py-28">
      <div>
        <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center text-white">
          What I offer.
        </h1>
        <div className="w-full px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">
          <OfferCard
            title="Cross Chain"
            subTitle="With availability of COSMOS Interchain and Ethereum, cross chain applications are on the rise"
            Icon={RxCopy}
          />
          <OfferCard
            title="Ethereum"
            subTitle="Developing smart contracts on Ethereum network have wide list of users"
            Icon={SiAntdesign}
          />
          <OfferCard
            title="Full Stack"
            subTitle="Full stack applications are way to achive an end to end solution to a problem"
            Icon={FaChartPie}
          />
          <OfferCard
            title="Training"
            subTitle="Blockchain and web3 fullstack trainig are available in catalogue incase anyone needs."
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
