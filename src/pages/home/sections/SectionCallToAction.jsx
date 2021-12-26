import React from 'react';

const SectionCallToAction = () => {
  return (
    <section className='section call-to-action'>
      <div className='container container-delta'>
        <div className='row'>
          <div className='col-lg-12'>
            <div className='block bg-primary rounded-lg'>
              <div className='row g-0 align-items-center'>
                <div className='col-lg-8'>
                  <div className='content-block'>
                    <h3 className='text-white text-capitalize mb-2'>
                      1Sol aggregates
                      <br />
                      everything on blockchain.
                    </h3>
                    <p className='text-white mb-4'>
                      Want to partner with 1Sol? Contact us.
                    </p>
                    <a href='/contact/' className='btn btn-secondary'>
                      Contact Us{' '}
                      <i className='arrow-right fas fa-arrow-right' />
                    </a>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <img
                    className='rounded-lg img-fluid'
                    width={425}
                    height={432}
                    src='https://1sol.io//images/cta_hu6f8e6ab76df8e4507fb1e345f5983e3b_16513_5a5f3cd45387654ff4738d023dff1464.webp'
                    alt='...'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCallToAction;
