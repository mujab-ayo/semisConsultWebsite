import React from "react";
import onboarding from "../onboarding";

const OnboardingCard = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 px-6 lg:px-20 ">
      <h1 className="text-primaryColor font-medium text-lg">Onboarding</h1>
      <h2 className="font-bold text-4xl">How to get started</h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {onboarding.map((card) => (
          <div
            key={card.id}
            className="p-6 flex flex-col  items-start max-w-md space-y-4 hover:shadow-lg rounded-md dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] dark:bg-gray-900 "
          >
            <h3 className="bg-primaryColor text-blue-300 py-2 px-4 rounded-md font-bold">
              {card.id}
            </h3>
            <h4 className="font-semibold text-base">{card.topic}</h4>
            <p className="font-normal text-sm">{card.writeUps}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingCard;
