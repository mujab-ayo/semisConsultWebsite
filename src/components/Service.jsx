import React from "react";
import service from "../service";

const Service = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
      <h1 className="text-[#1324BB] font-medium text-lg">Service</h1>
      <h3 className="text-2xl font-bold">
        We provide top notch service for various business across various field.
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {service.map((box) => (
          <div
            key={box.id}
            className="p-6 flex flex-col items-start space-y-4 max-w-xl border border-gray-200 border-solid dark:border-none dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] dark:bg-gray-900 rounded-xl  hover:shadow-lg"
          >
            <h4 className="font-bold text-xl text-gray-800 dark:text-gray-200">
              {box.topic}
            </h4>
            <p className="text-base font-semi dark:text-gray-400">
              {box.writeUps}
            </p>
            <div>
              <img src={`/images/${box.image}`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
