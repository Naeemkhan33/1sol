import React from 'react';

const SectionAggregate = () => {
  return (
    <section className='section'>
      <div className='container container-delta'>
        <div className='row align-items-center'>
          <div className='col-lg-6 order-1 order-lg-0'>
            <div className='section-title'>
              <p className='subtitle'>Not Just a DEX Aggregator</p>
              <h2 className='title'>
                We aim to
                <br />
                aggregate everything.
              </h2>
            </div>
            <div className='content'>
              <p>What we will aggregate in the future:</p>
              <ul>
                <li>Swaps, orderbooks, CeFi markets, OTC markets</li>
                <li>NFT trading aggregation</li>
                <li>GameFi lootbox and accessories trading markets</li>
                <li>1-Step lending &amp; borrowing</li>
                <li>And more</li>
              </ul>
            </div>
          </div>
          <div className='col-lg-6 order-0 mb-5 mb-lg-0 order-lg-1'>
            <img
              className='img-fluid px-2'
              width={570}
              height={444}
              src='https://1sol.io//images/block-image-01_hu5291c24a480fd4794642e0f4b3d4543e_77578_25f998ef4174d34d975f121e14954933.webp'
              alt='...'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAggregate;
