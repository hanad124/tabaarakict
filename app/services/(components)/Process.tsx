// Importing necessary dependencies and data
import { processesData } from "@/data/generalData";
import React from "react";
import Image from "next/image";
import elipse from "@/public/assets/process-elipse.png";

// Processes component
const Process = () => {
  return (
    <div className="">
      <div className="py-11 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 my-5 mb-16">
        {/* Title */}
        <h2 className="mt-3 text-custom_secondary text-3xl font-bold leading-normal lg:leading-relaxed lg:text-5xl md:text-4xl md:mx-24 text-center lg:mx-36 mb-0">
          Process we follow
        </h2>
        {/* Process */}
        <div className="flex flex-col justify-center md:justify-start items-center gap-y-20 gap-x-10 md:flex-row md:flex-wrap mt-16 md:mt-24">
          {processesData.map((process) => (
            <div
              key={process.id}
              className={`relative flex flex-col items-center justify-center gap-y-4 w-full md:w-[260px] text-background rounded-md p-5 ${
                process.id === 1
                  ? "bg-[#FC5732]"
                  : process.id === 2
                  ? "bg-[#0070E2]"
                  : process.id === 3
                  ? "bg-[#7B3DD9]"
                  : "bg-[#00B59A]"
              }`}
            >
              {/* Process number */}
              <div
                className={`flex justify-center items-center absolute -top-10 -right-5 w-16 h-16 rounded-full text-background text-2xl z-10 ${
                  process.id === 1
                    ? "bg-[#FC5732]"
                    : process.id === 2
                    ? "bg-[#0070E2]"
                    : process.id === 3
                    ? "bg-[#7B3DD9]"
                    : "bg-[#00B59A]"
                }`}
              >
                {process.id}
              </div>
              {/* Process image */}
              <Image
                src={elipse}
                width={200}
                height={100}
                alt="eclipse"
                className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                style={{ objectFit: "cover" }}
              />
              {/* Process icon */}
              <Image
                src={process.icon}
                alt={process.title}
                className="w-16 h-16 mt-10 flex-1"
                width={100}
                height={200}
              />
              {/* Process title */}
              <h3 className="text-2xl font-bold text-center flex-1 mt-3">
                {process.title}
              </h3>
              {/* Process description */}
              <p className="text-center font-light leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Process;