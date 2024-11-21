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
            title="Data and AI Engineering"
            subTitle="End-to-end AI solutions with data preprocessing, model development and deployment"
            Icon={RxCopy}
          />
          <OfferCard
            title="MLOPS"
            subTitle="Implementing scalable MLOps pipelines for seamless deployment, monitoring, and automation"
            Icon={SiAntdesign}
          />
          <OfferCard
            title="Fullstack Development"
            subTitle="Developping full-stack web applications using mordern python and javascipt stacks"
            Icon={FaChartPie}
          />
          <OfferCard
            title="Freelancing"
            subTitle="Developping tailored AI solutions as a freelancer, managing end-to-end project lifecycle"
            Icon={FaConnectdevelop}
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;
