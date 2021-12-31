import React from 'react';
import DayJS from 'react-dayjs';

const LatestDeposits = ({ deposit }) => {
  console.log(deposit);

  return (
    <div className='deposits-list fade-in'>
      <ul className='nav row row-cols-1 row-cols-md-2'>
        {deposit.map((item) => (
          <li key={item.txId}>
            <div className={`px-1 bg-dark`}>
              <span className='me-1'>{item.n}</span>
              <span className='text-quaternary'>
                <DayJS format='MM-DD-YYYY'>{item.timestamp}</DayJS>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestDeposits;
