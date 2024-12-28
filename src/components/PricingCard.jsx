import React from "react";
import pricing from "../pricing";

const PricingCard = () => {
  return (
    <div className="  w-full h-auto flex flex-col justify-center items-center gap-10 px-6 lg:px-20">
      <h1 className="text-primaryColor font-medium text-lg">About Us</h1>
      <h2 className="font-bold text-4xl text-center ">
        Merging growth and scalability for sustainable business
      </h2>
      <div className="flex justify-between gap-16 bg-blue-50 px-6 py-3 rounded-full">
        <button className="font-normal text-white rounded-full bg-primaryColor px-4 py-2">
          Private LL
        </button>
        <button className="font-normal">Public LL</button>
      </div>
      <div className="flex  gap-16 flex-wrap lg:flex-nowrap justify-center lg:justify-start w-full">
        {pricing.map((card) => (
          <article
            key={card.id}
            className="p-6 shadow-md flex flex-col justify-between items-center dark:border-none dark:hover:shadow-[rgba(247,240,_252,_0.1)_0px_0px_10px] dark:bg-gray-900 rounded-xl  hover:shadow-lg"
          >
            <div className="bg-blue-50  flex flex-col items-center justify-center p-2 space-y-2 w-full rounded-lg dark:bg-blue-800">
              <div className="flex justify-center items-center space-x-2 text-primaryColor text-lg dark:text-white">
                <img src={`/images/${card.img}`} alt={card.name} />
                <span>{card.name}</span>
              </div>
              <div>
                <span className="font-bold text-2xl">${card.value}</span>
                <span className="text-xl">/per month</span>
              </div>
            </div>
            <ul className="py-6 flex flex-col items-start mb-auto space-y-4">
              {card.bullet.map((point, index) => (
                <li
                  key={index}
                  className="flex justify-center items-center gap-4"
                >
                  <img
                    src={`/images/${card.img}`}
                    alt=""
                    className="text-2xl"
                  />
                  <span className="font-medium text-base">{point} </span>
                </li>
              ))}
            </ul>
            <button className="bg-blue-50 dark:text-white dark:bg-blue-800 w-full  p-4 rounded-md  text-primaryColor font-medium text-lg hover:bg-primarytext-primaryColor hover:text-white">
              Subscribe
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
