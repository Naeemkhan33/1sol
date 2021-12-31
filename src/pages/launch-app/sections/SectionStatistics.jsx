import React from 'react';
import ReactTooltip from 'react-tooltip';
import LatestDeposits from '../components/LatestDeposits';

const SectionStatistics = ({ tabs, data }) => {
  console.log(data);
  return (
    <div className='d-flex flex-column h-100'>
      {/* Buttons */}
      <div className='d-flex justify-content-between'>
        <button
          type='button'
          className='btn btn-outline-light border-0 shadow-lg bg-primary-1 fw-bold border-radius-1'
        >
          <span className='me-1'>Statistics</span>
          <span className='badge bg-quaternary text-uppercase'>
            {(tabs === 1 && <span>0.1</span>) ||
              (tabs === 2 && <span>1</span>) ||
              (tabs === 3 && <span>10</span>) ||
              (tabs === 4 && <span>100</span>)}{' '}
            ETH
          </span>
        </button>
      </div>
      {/* /Buttons */}
      {/* Body */}
      <div className='flex-fill shadow-lg bg-primary-1 p-3 small'>
        <div>
          <div className='d-block'>
            Anonymity set
            <i
              data-tip
              data-for='setTip'
              className='fa fa-info-circle text-info ms-1'
            >
              <ReactTooltip
                id='setTip'
                effect='solid'
                backgroundColor='#62A8CA'
              >
                Number of deposits your withdrawal will potentially originate
                from
              </ReactTooltip>
            </i>
          </div>
          <div className='field'>
            <span>
              <b className='text-quaternary'>{data.equal_user_deposits}</b>{' '}
              <span>equal user deposits</span>
            </span>
          </div>
        </div>
        <div className='mt-2'>
          <div className='mb-1'>
            <span>Latest deposits</span>
          </div>
          <div className='small'>
            {tabs === 1 && <LatestDeposits deposit={data.latest_deposits} />}
            {tabs === 2 && <LatestDeposits deposit={data.latest_deposits} />}
            {tabs === 3 && <LatestDeposits deposit={data.latest_deposits} />}
            {tabs === 4 && <LatestDeposits deposit={data.latest_deposits} />}
          </div>
        </div>
      </div>
      {/* /Body */}
      {/* link */}
      <div className='text-end'>
        <span className='btn btn-outline-light border-0 shadow-lg bg-primary-1 rounded-0'>
          <small>
            Your IP{' '}
            <a
              target='_blank'
              href='https://www.torproject.org/'
              rel='noreferrer'
              className='text-quaternary'
              data-tip
              data-for='ipTip'
            >
              {data?.your_ip}
            </a>
            <ReactTooltip id='ipTip' effect='solid' backgroundColor='#62A8CA'>
              Make sure to use different IP addresses for deposits and
              withdrawals. We recommend using a TOR browser or a VPN service.
            </ReactTooltip>
          </small>
        </span>
      </div>
      {/* /link */}
    </div>
  );
};

export default SectionStatistics;
