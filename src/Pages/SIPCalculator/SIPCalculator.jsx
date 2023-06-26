import React, { useEffect, useState } from 'react';
import { Slider, TextField, Button, Card, Box, CardContent, Typography } from '@mui/material';
import CalcChart from './CalcChart';

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [annualRateOfReturn, setAnnualRateOfReturn] = useState(0);
  const [principal , setPrincipal] = useState(0)
  const [interest , setInterest] = useState(0)
  const [futureValue, setFutureValue] = useState(''); 
  const [selectedValue, setSelectedValue] = useState('SIP');

  // Handle change event
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleMonthlyInvestmentChange = (event, value) => {
    let number = Number(event.target.value)
    if(number > 1000000)
    number = 1000000;
    setMonthlyInvestment(number);
  };

  const handleInvestmentDurationChange = (event, value) => {
    setInvestmentDuration(value);
  };

  const handleAnnualRateOfReturnChange = (event, value) => {
    setAnnualRateOfReturn(value);
  };

  const calculateFutureValue = () => {
    const rateOfReturn = annualRateOfReturn / 100;
    const i = rateOfReturn / 12;
    const power = Math.pow(1 + i, (investmentDuration * 12)) - 1;
    const futureVal = monthlyInvestment * power * (1 + i) / i;
    setFutureValue(futureVal.toFixed(2));
  };

  const calculateTotalAmount = () => {
    const principalAmount = parseFloat(monthlyInvestment);
    const rate = parseFloat(annualRateOfReturn) / 100;
    const time = parseFloat(investmentDuration);

    if (principalAmount && rate && time) {
      const interest = principalAmount * rate * time;
      const total = principalAmount + interest;
      setFutureValue(total.toFixed(2));
    } else {
      setFutureValue('');
    }
  };
   

  useEffect(() => {
    const totalPrincipal = monthlyInvestment * investmentDuration *12
    setPrincipal(() => totalPrincipal)
    setInterest(() => futureValue -totalPrincipal)
  },[futureValue])
  return (
    <>
    <div className='calc_container'>    
    <div class="container ">
    <div class="row">
      <div class="col-md-6 calculator_slider">
      <div>
      <div className='d-flex'>
      <label className='d-flex mx-1' >
          SIP
        <input
        className='mx-1'
          type="radio"
          value="SIP"
          checked={selectedValue === 'SIP'}
          onChange={handleChange}
        />
      </label>
      <label className='d-flex mx-1'>
          Lumpsum
        <input
        className='mx-1'
          type="radio"
          value="Lumpsum"
          checked={selectedValue === 'Lumpsum'}
          onChange={handleChange}
        />
      </label>
     
    </div>
      <div>
        <div className='calc_label' >
        <label htmlFor="monthlyInvestment">Monthly Investment:</label>
        <input
        class="border rounded border-slate-200 focus:outline-none px-4 py-1 input_number"
          type="number"
          value={monthlyInvestment}
          onChange={(e) => handleMonthlyInvestmentChange(e)}
        />
        </div>
        <Slider
          id="monthlyInvestment"
          min={0}
          max={1000000}
          value={monthlyInvestment}
          onChange={(e)=>handleMonthlyInvestmentChange(e)}
        />
       
      </div>
      <div>
        <div className='calc_label' >

        <label htmlFor="investmentDuration">Investment Duration (years):</label>
        <input
        class="border rounded border-slate-200 focus:outline-none px-4 py-1 input_number"
          type="number"
          value={investmentDuration}
          onChange={handleInvestmentDurationChange}
        />
        </div>
        <Slider
          id="investmentDuration"
          min={0}
          max={50}
          step={1}
          value={investmentDuration}
          onChange={handleInvestmentDurationChange}
        />
        <br/>
      </div>
      <div>
        <div className='calc_label' >

        <label htmlFor="annualRateOfReturn">Annual Rate of Return (%):</label>
        <input
        class="border rounded border-slate-200 focus:outline-none px-4 py-1 input_number"
          type="number"
          value={annualRateOfReturn}
          onChange={handleAnnualRateOfReturnChange}
        />
        </div>
        <Slider 
          id="annualRateOfReturn"
          min={0}
          max={20}
          value={annualRateOfReturn}
          onChange={handleAnnualRateOfReturnChange}
        />
        
      </div>
      <Button variant="contained" onClick={selectedValue == 'SIP' ?calculateFutureValue : calculateTotalAmount}>Calculate</Button>
      {/* <p>Future Value: {futureValue}</p> */}
    </div>
    </div>
    <div class="col-md-6 first_image">
        <div class="card  ">
          <CalcChart principal={principal} interest={interest} futureVal={futureValue} />
        </div>
      </div>
  </div>
  </div>
    </div>
   
    </>
  );
};

export default SIPCalculator;
