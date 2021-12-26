import React from 'react';

const SectionWorkProcess = () => {
  return (
    <section className='bg-primary rounded-lg section wave-block'>
      <div className='container container-delta'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-8'>
            <div className='section-title'>
              <p className='subtitle'>Work process of 1Sol</p>
              <h2 className='title'>The process of how 1Sol works</h2>
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='row gy-4'>
              <div className='col-lg-3 col-sm-6 process-item'>
                <div className='block pt-4' data-count='01'>
                  <div className='process-image'>
                    <img
                      loading='lazy'
                      decoding='async'
                      className='w-100'
                      width={350}
                      height={278}
                      src='https://1sol.io//images/process/01_hu3e967376e48a5070b99edc3f31a1c189_14300_c0feca71b309777ca083a56b119fab55.webp'
                      alt='....'
                    />
                  </div>
                  <h3 className='title h4'>Initialize accounts</h3>
                  <p className='mb-0'>
                    First of all, create accounts and you need to have your gas
                    credits ready.
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 process-item'>
                <div className='block pt-4' data-count='02'>
                  <div className='process-image'>
                    <img
                      loading='lazy'
                      decoding='async'
                      className='w-100'
                      width={350}
                      height={278}
                      src='https://1sol.io//images/process/02_hu43927a7a6606507c44d6729e4b920faa_18493_3b7faee6204cbd2458a94421210c38ad.webp'
                      alt='....'
                    />
                  </div>
                  <h3 className='title h4'>Smart calculator</h3>
                  <p className='mb-0'>
                    1Sol Smart Calculator will do the price comparing and the
                    work of finding the best route, in milliseconds.
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 process-item'>
                <div className='block pt-4' data-count='03'>
                  <div className='process-image'>
                    <img
                      loading='lazy'
                      decoding='async'
                      className='w-100'
                      width={350}
                      height={278}
                      src='https://1sol.io//images/process/03_hua3cf62ab3823f113c54987fff41c107a_22053_94083db408f8fff730f0bf8dd61322c0.webp'
                      alt='....'
                    />
                  </div>
                  <h3 className='title h4'>Swap</h3>
                  <p className='mb-0'>
                    You confirm the transaction, then we swap it. You don’t need
                    to care about the technical details.
                  </p>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 process-item'>
                <div className='block pt-4' data-count='04'>
                  <div className='process-image'>
                    <img
                      loading='lazy'
                      decoding='async'
                      className='w-100'
                      width={350}
                      height={278}
                      src='https://1sol.io//images/process/04_hu307e822cb4fefb9e766179ceb0dc955e_22270_7dc3fcd132cfb2a2e9a248fd9d8cfc7c.webp'
                      alt='....'
                    />
                  </div>
                  <h3 className='title h4'>Return to you</h3>
                  <p className='mb-0'>
                    Once everything’s done. We transfer you back the max amount
                    of tokens you swapped.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='alter-position has-wave'>
        <svg
          className='wave-left'
          style={{ opacity: '.75' }}
          width={245}
          height={280}
          viewBox='0 0 245 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='.75'
            d='M193.97-38.8821c-36.579-7.9613-65.103 30.98701-78.93 59.2259C105.459 39.8887 99.9716 62.2619 106.378 83.6072 109.18 92.9645 114.527 101.934 122.265 108.104 126.855 111.683 136.46 116.764 139.736 109.213 143.28 101.197 137.772 90.897 132.91 84.8394c-5.705-7.0091-13.496-12.2815-21.829-15.5443C95.2955 63.1224 69.9647 60.8812 55.8795 72.4081c-8.662 7.2278-4.7234 22.6592-3.9181 32.2569 1.1571 12.742 3.0777 25.77 3.087 38.624C55.1115 155.244 49.4632 165.296 38.0867 169.718 27.76 173.662 17.194 171.587 7.37011 167.153-3.4496 162.3-12.9648 155.723-24.4057 152.213-35.3152 148.856-46.4485 147.226-57.8057 147.325-80.337 147.475-102.017 154.461-120.449 167.349-131.04 174.701-140.922 157.231-130.447 149.812-89.9485 121.492-35.6544 120.487 7.1228 144.256 12.9946 147.491 30.4893 158.211 34.4632 147.038 36.4166 141.51 33.9943 132.836 33.554 127.164 32.793 118.83 32.0989 110.38 31.3379 102.046c-1.2684-13.89-2.7331-28.5124 6.4976-40.2105 7.7249-9.6263 20.1331-14.2268 31.9644-16.2193 23.8455-4.0341 49.2961 1.2171 68.3831 16.4168 17.199 13.6448 32.115 43.309 14.736 62.686-18.983 21.082-48.166-1.029-58.91-19.152-13.4177-22.6066-13.2436-50.5239-5.17-74.9641C103.703-13.91 144.925-70.2942 198.697-58.5982 211.737-55.7134 206.546-36.2654 193.97-38.8821z'
            fill='currentcolor'
          />
        </svg>
        <svg
          className='wave-right'
          style={{ opacity: '.9' }}
          width={231}
          height={117}
          viewBox='0 0 231 117'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='.9'
            d='M246.59 1.52485c-19.011-5.86761-37.742 6.00731-47.527 21.79395-10.485 16.7646-10.764 39.2572-24.184 54.0659C169.987 82.8332 163.557 86.8846 156.148 85.0685 150.556 83.6714 145.943 79.4803 142.029 75.5685c-10.344-10.0587-19.15-22.4925-32.85-28.3601-33.1291-14.3896-62.7639 24.169-51.581 55.1836 3.4947 9.5 9.5056 17.184 15.3766 25.287C78.0069 134.524 83.0393 141.649 83.4586 150.311 83.878 158.553 78.2866 162.605 70.3187 161.487 61.0928 160.09 53.8238 153.105 46.9743 147.237c-8.5271-7.125-18.4519-15.786-30.4736-13.691C4.33924 135.642-.972693 147.517.145608 158.833 1.26391 170.568 7.69407 180.208 14.2641 189.568c5.1721 7.404 13.6991 18.72 8.2474 27.801-6.8495 11.596 11.183 22.213 18.1723 10.618C51.8668 208.987 39.9849 190.127 29.2213 174.34 26.8449 170.708 24.1889 167.075 22.6513 163.024 21.9523 161.208 21.3932 159.252 21.1137 157.436 20.9739 156.597 21.3932 155.34 21.1137 154.502 20.4147 152.127 22.0922 154.642 19.9954 154.083 28.103 156.318 34.8127 164.421 41.2429 169.45 55.7808 180.906 77.308 188.869 93.663 175.737c14.678-11.875 12.581-33.389 4.3335-48.478-7.2689-13.411-24.0433-25.985-21.3874-42.8891C78.2866 73.4729 87.5125 61.4583 99.674 65.7892 111.416 69.9803 119.244 82.5538 127.771 90.9361c10.764 10.3379 23.904 17.7429 39.28 14.8089C188.439 101.693 199.901 80.5979 206.331 61.7377c4.893-14.2499 13.14-46.6615 34.947-39.9556C253.999 25.6938 259.59 5.43659 246.59 1.52485z'
            fill='currentcolor'
          />
        </svg>
      </div>
    </section>
  );
};

export default SectionWorkProcess;
