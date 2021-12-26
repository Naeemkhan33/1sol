import React from 'react';

const LatestDeposits = () => {
  const list = [
    { odd: true },
    { odd: true },
    {},
    {},
    { odd: true },
    { odd: true },
    {},
    {},
    { odd: true },
    { odd: true },
  ];

  return (
    <div className='deposits-list fade-in'>
      <ul className='nav row row-cols-1 row-cols-md-2'>
        {list.map((item) => (
          <li>
            <div className={`px-1 ${item.odd && 'bg-primary'}`}>
              <span className='me-1'>17827.</span>
              <span className='text-quaternary'>4 minutes ago</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestDeposits;
