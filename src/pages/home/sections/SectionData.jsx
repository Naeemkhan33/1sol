import React from 'react';
import { CountUp } from 'use-count-up';

const SectionData = () => {
  return (
    <section className='section pt-0'>
      <div className='container container-delta'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-10'>
            <div className='section-title'>
              <h2 className='title'>Data</h2>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row gy-3'>
              <div className='col-lg-3 col-6 fact-item'>
                <div className='block'>
                  <i className='icon fas fa-coins' />
                  <h4 className='text-xl'>
                    <span className='counter' data-count={7}>
                      <CountUp isCounting end={7} duration={3.2} />
                    </span>
                    %
                  </h4>
                  <p className='mb-0'>
                    Save up to 7% <br />
                    during swapping
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-6 fact-item'>
                <div className='block'>
                  <i className='icon fas fa-users' />
                  <h4 className='text-xl'>
                    <span className='counter' data-count={1000}>
                      <CountUp isCounting end={1000} duration={3.2} />
                    </span>
                    +
                  </h4>
                  <p className='mb-0'>
                    Attract 1000+ <br /> users per hour
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-6 fact-item'>
                <div className='block'>
                  <i className='icon fas fa-braille' />
                  <h4 className='text-xl'>
                    <span className='counter' data-count={7}>
                      <CountUp isCounting end={7} duration={3.2} />
                    </span>
                    +
                  </h4>
                  <p className='mb-0'>
                    7 partners
                    <br /> integrating with 1Sol
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-6 fact-item'>
                <div className='block'>
                  <i className='icon fas fa-bolt' />
                  <h4 className='text-xl'>
                    <span className='counter' data-count={50}>
                      <CountUp isCounting end={50} duration={3.2} />
                    </span>
                    %
                  </h4>
                  <p className='mb-0'>
                    Save 50% on time <br /> searching for the best route
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionData;
