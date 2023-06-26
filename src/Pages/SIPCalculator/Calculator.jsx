import React, { useState } from 'react';

const LumpSumCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const handlePrincipalChange = (event) => {
    setPrincipal(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const calculateTotalAmount = () => {
    const principalAmount = parseFloat(principal);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(duration);

    if (principalAmount && rate && time) {
      const compoundInterest = principal * Math.pow(1 + rate, time);
      setTotalAmount(compoundInterest.toFixed(2));
    } else {
      setTotalAmount('');
    }
  };

  return (
    <div>
      <h2>Lump Sum Calculator</h2>
      <div>
        <label>Principal Amount:</label>
        <input type="number" value={principal} onChange={handlePrincipalChange} />
      </div>
      <div>
        <label>Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={handleInterestRateChange} />
      </div>
      <div>
        <label>Duration (years):</label>
        <input type="number" value={duration} onChange={handleDurationChange} />
      </div>
      <div>
        <button onClick={calculateTotalAmount}>Calculate</button>
      </div>
      {totalAmount && (
        <div>
          <h3>Total Amount:</h3>
          <p>{totalAmount}</p>
        </div>
      )}
    </div>
  );
};

export default LumpSumCalculator;
