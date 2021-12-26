import React from 'react';
import Deposit from '../components/Deposit';
import WithDraw from '../components/WithDraw';

const SectionToken = ({
  tabs,
  onClick,
  select,
  onTab1,
  onTab2,
  onTab3,
  onTab4,
}) => {
  return (
    <div className='d-flex flex-column h-100'>
      {/* Buttons */}
      <div className='d-flex justify-content-between'>
        <button
          type='button'
          className={`btn fw-bold border-0 shadow-lg bg-primary-1 border-radius-1 ${
            select ? 'btn-primary' : 'btn-outline-light'
          }`}
          onClick={onClick}
        >
          Deposit
        </button>
        <button
          type='button'
          className={`btn fw-bold border-0 shadow-lg bg-primary-1 border-radius-2 ${
            select ? 'btn-outline-light' : 'btn-primary'
          }`}
          onClick={onClick}
        >
          Withdraw
        </button>
      </div>
      {/* /Buttons */}
      {/* Body */}
      <div className='flex-fill shadow-lg bg-primary-1 p-3 border-radius-3'>
        {select ? (
          <div className='mb-5'>
            {' '}
            <Deposit
              onTab1={onTab1}
              onTab2={onTab2}
              onTab3={onTab3}
              onTab4={onTab4}
              active={tabs}
            />
          </div>
        ) : (
          <div className='mb-5'>
            {' '}
            <WithDraw />
          </div>
        )}
      </div>
      {/* /Body */}
      {/* link */}
      <div>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://etherscan.io/address/0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc'
          class='btn btn-outline-light border-0 shadow-lg bg-primary-1 border-radius-3'
        >
          <small className='text-quaternary'>
            eth-
            {(tabs === 1 && <span>01</span>) ||
              (tabs === 2 && <span>1</span>) ||
              (tabs === 3 && <span>10</span>) ||
              (tabs === 4 && <span>100</span>)}
            .tornadocash.eth
          </small>
        </a>
      </div>
      {/* /link */}
    </div>
  );
};

export default SectionToken;
