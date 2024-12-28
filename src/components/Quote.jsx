import React from 'react'

const Quote = () => {
  return (
    <div className="relative w-full px-6 lg:px-20 h-full rounded-2xl">
      <div className="relative z-10 flex flex-col gap-4 justify-center items-center">
        <h2 className="font-bold text-5xl p-6 max-w-4xl text-center">
          <span className="text-primaryColor"> Semis consult & and co</span> is
          here to help your business scale into success
        </h2>
        <button className="bg-primaryColor px-5 py-2 text-white font-medium rounded-xl hover:bg-transparent hover:text-primaryColor border-2 border-primaryColor">
          Get free quote
        </button>
      </div>
      <img
        src="/images/sub.svg"
        className="w-full h-full absolute inset-0 px-6 object-cover rounded-2xl lg:px-20 z-0"
        alt=""
      />
    </div>
  );
}

export default Quote
