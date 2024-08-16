import React, { useState } from 'react';

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
      setError('');
    } else {
      setError('Please enter only numbers');
    }
  };

  const handleSubmit = () => {
    if (phoneNumber === '') {
      setError('Please enter your phone number');
    } else {
      console.log('Processing payment...');
      // Add your payment processing logic here
    }
  };

  return (
    <div className='flex flex-col gap-y-10 justify-center items-center pt-10'>
      <p className='text-l5 text-gray-800'>Enter a valid phone number to pay</p>

      <input
        type="text"
        value={phoneNumber}
        onChange={handleInputChange}
        className='outline-none p-5 w-[30%] shadow shadow-slate-500 text-gray-600 text-xl'
        placeholder='Phone number'
      />
      {error && <p className='text-red-500'>{error}</p>}

      <button
        onClick={handleSubmit}
        className='p-4 w-[15%] bg-[#EA7519] text-white mb-3 font-semibold text-[17px] rounded-lg'
      >
        Pay GH₵ 30
      </button>
    </div>
  );
};

export default Payment;
