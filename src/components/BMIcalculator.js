import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState('');

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      determineStatus(bmiValue);
    }
  };

  const determineStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      setStatus('Underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus('Normal weight');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setStatus('Overweight');
    } else {
      setStatus('Obesity');
    }
  };

  return (
    <div className="max-w-96 mx-auto bg-gradient-to-r from-purple-400 to-blue-400 p-6 rounded-2xl shadow-2xl mt-10">
      <h1 className="text-white text-2xl font-sans mb-4 text-center">BMI Calculator</h1>
      <div className="mb-4">
        <label className="block text-white text-sm font-sans mb-2" htmlFor="height">
          Height (cm)
        </label>
        <input
          type="number"
          id="height"
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-sans mb-2" htmlFor="weight">
          Weight (kg)
        </label>
        <input
          type="number"
          id="weight"
          className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button
        onClick={calculateBMI}
        className="bg-gradient-to-r from-purple-400 to-blue-400 hover:from-pink-300 hover:to-amber-300 text-white font-sans py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline w-1/2"
      >
        Calculate
      </button>
      {bmi && (
        <div className="mt-4 text-center">
          <p className="text-xl text-white font-sans">Your BMI is: <span className="font-sans">{bmi}</span></p>
          <p className={`text-xl font-sans ${status === 'Underweight' ? 'text-amber-600' : status === 'Normal weight' ? 'text-emerald-800' : status === 'Overweight' ? 'text-orange-700' : 'text-red-700'}`}>
            {status}
          </p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
