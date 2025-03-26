import React, { useState } from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-4 rounded-full shadow-inner overflow-hidden">
      <div
        className="h-4 bg-green-600 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};


const MyForm = () => {
  const totalSteps = 3; // Example: 3 pages
  const [currentStep, setCurrentStep] = useState(1);

  const nextPage = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevPage = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* Multi-Step Form */}
      <div className="mt-6 space-y-4">
        {currentStep === 1 && (
          <>
            <h2 className="text-xl font-bold">Page 1</h2>
            <input type="text" placeholder="First Name" className="w-full border p-2 rounded" />
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2 className="text-xl font-bold">Page 2</h2>
            <input type="email" placeholder="Email Address" className="w-full border p-2 rounded" />
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2 className="text-xl font-bold">Page 3</h2>
            <textarea placeholder="Additional Info" className="w-full border p-2 rounded"></textarea>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-4">
          <button
            onClick={prevPage}
            disabled={currentStep === 1}
            className="bg-gray-400 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Back
          </button>
          <button
            onClick={nextPage}
            disabled={currentStep === totalSteps}
            className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyForm;

