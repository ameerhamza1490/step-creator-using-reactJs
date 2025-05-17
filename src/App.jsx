import React, { useState } from "react";

const App = () => {
  const arr = [1, 2, 3];
  const qoutes = [
    "Step 1: Learn React",
    "Step 2: Start Your Journey",
    "Step 3: Invest Your new income",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < qoutes.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center  w-full h-dvh gap-24">
        <div className="flex flex-col items-center justify-center  gap-12  bg-gray-200 rounded-2xl">
          <div className="flex justify-center items-center gap-48">
            {arr.map((items, index) => (
              <div
                key={index}
                className={`border-2 rounded-full px-4 py-2 w-12 h-12 flex items-center justify-center font-bold
      ${
        index <= currentIndex ? "bg-blue-800 text-white" : "bg-white text-black"
      }`}
              >
                {items}
              </div>
            ))}
          </div>
          <div className="font-bold text-2xl">{qoutes[currentIndex]}</div>
          <div className="w-full flex justify-between">
            <button
              className="px-6 py-2 bg-blue-800 text-white cursor-pointer rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              className="px-6 py-2 bg-blue-800 text-white cursor-pointer rounded-2xl disabled:bg-gray-400 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={currentIndex === qoutes.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
