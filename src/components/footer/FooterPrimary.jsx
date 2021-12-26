import React from 'react';
import { Link } from 'react-router-dom';

const FooterPrimary = () => {
  return (
    <footer className='bg-dark px-1 wave-block'>
      <div className='container container-delta'>
        <div className='row'>
          <div className='col-lg-6 mx-auto text-center text-lg-start mb-5 mb-lg-0'>
            <Link
              className='footer-brand'
              to='/'
              title='1Sol - An innovative cross-chain aggregator on Solana'
            >
              <img
                className='img-fluid'
                width='147x'
                height={200}
                src='/assets/logo.webp'
                alt='..'
              />
            </Link>
          </div>
          <div className='col-lg-6'>
            <ul className='list-inline social-links d-flex flex-wrap justify-content-center justify-content-lg-end mb-0'>
              <li className='list-inline-item'>
                <a
                  href='https://twitter.com/1solProtocol'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-twitter' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://t.me/onesolcommunity'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-telegram' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://github.com/1sol-io'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-github' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://discord.gg/juvVBKnvkj'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-discord' />
                </a>
              </li>
              <li className='list-inline-item'>
                <a
                  href='https://medium.com/@1solProtocol'
                  target='_blank'
                  rel='noreferrer'
                >
                  <i className='fab fa-medium' />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footer-menu'>
          <div className='row gy-4 row-cols-1 row-cols-sm-3 row-cols-lg-5'>
            <div className='col block'>
              <h4 className='footer-menu-title text-white'>Products</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://app.1sol.io'>1Sol</a>
                </li>
              </ul>
            </div>
            <div className='col block'>
              <h4 className='footer-menu-title text-white'>Services</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='contact/'>DEX(s) Aggregation</a>
                </li>
                <li>
                  <a href='contact/'>Crypto Community Boost</a>
                </li>
                <li>
                  <a href='contact/'>Project Promotion</a>
                </li>
              </ul>
            </div>
            <div className='col block'>
              <h4 className='footer-menu-title text-white'>Support</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='contact/'>Contact</a>
                </li>
                <li>
                  <a href='#!'>Privacy Policy</a>
                </li>
                <li>
                  <a href='#!'>Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
            <div className='col block'>
              <h4 className='footer-menu-title text-white'>Resources</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!'>Logo &amp; Branding</a>
                </li>
                <li>
                  <a href='https://file.1sol.io/static/1Sol%20Protocol%20Pitch%20Deck%20v0.7.pdf'>
                    LightPaper
                  </a>
                </li>
              </ul>
            </div>
            <div className='block'>
              <h4 className='footer-menu-title text-white'>Others</h4>
              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://medium.com/@1solProtocol'>Medium Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='row'>
            <div className='col-lg-12'>
              <p className='content has-bg-dark text-center'>
                Built by <a href='https://1sol.io/'>1Sol</a> Team with 💡
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='has-wave'>
        <svg
          className='wave-left text-white'
          style={{ opacity: '.15' }}
          width={313}
          height={230}
          viewBox='0 0 313 230'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M-14.8194 14.9839C3.13821 37.9424 36.9915 27.6999 61.6547 27.5681 84.2532 27.4016 106.769 35.7678 122.993 51.6513c15.33 14.8661 23.997 37.6685 16.359 58.4347C131.009 132.997 107.852 148.309 83.7288 148.845 72.5181 149.081 58.5368 146.113 50.8212 137.176 42.421 127.407 45.0441 112.296 53.7244 103.604c16.6178-16.5455 49.2276-12.4739 69.4306-5.6347C145.591 105.666 164.921 121.085 172.951 143.847 181.535 167.923 174.754 193.715 169.644 217.622 166.685 231.087 164.023 244.891 165.095 258.789 166.016 270.831 170.68 282.45 177.16 292.612c12.993 20.202 35.34 35.004 59.638 36.719C248.749 330.2 249.041 348.944 236.936 348.163 195.469 345.218 158.214 313.978 148.665 273.181 143.449 251.044 148.105 228.831 152.906 207.045 157.341 187.105 163.047 163.876 153.199 144.516 144.114 126.658 125.512 116.747 106.475 112.813 96.88 110.89 86.1704 110.224 76.5058 112.43 70.8344 113.762 58.0659 121.748 68.0603 127.018 84.7687 135.773 108.523 126.454 118.163 111.279 128.021 95.7732 122.768 77.6448 110.371 65.3791 93.9698 49.189 72.473 45.2436 50.2436 46.9349c-26.851 2.0083-59.52675 5.4372-78.346-18.6596C-31.2832 24.1825-31.9544 18.9474-28.03 14.9438-24.8161 11.6571-17.8793 10.9235-14.8194 14.9839z'
            fill='currentcolor'
          />
        </svg>
        <svg
          className='wave-right text-white'
          style={{ opacity: '.15' }}
          width={291}
          height={170}
          viewBox='0 0 291 170'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M40.6178-98.5373C26.3888-74.758 17.9858-47.7259 16.9774-19.9086 16.1931 1.51518 20.3386 27.5378 38.6011 41.4464 50.9255 50.7562 72.5492 51.2049 83.305 39.0909 86.4422 35.6137 92.3803 22.1538 84.5375 20.247 80.7281 19.3496 76.5826 24.0606 74.4539 26.6404c-4.0335 4.711-6.8344 10.6559-8.9632 16.4885-3.5853 9.9828-3.5853 21.0873 7.3946 25.7983C82.1846 72.9652 93.2766 71.7313 102.8 69.2637c22.856-5.8327 45.712-19.8535 59.381-39.4826C163.638 27.6499 164.198 25.7431 165.206 23.4998 165.654 22.4903 163.414 23.3876 166.215 24.0606 164.87 23.7241 163.638 23.7241 162.293 23.7241 157.139 24.0606 152.21 26.5283 148.4 30.0054 140.782 37.2963 139.661 48.5129 144.927 57.4862c5.602 9.5342 16.806 11.8896 27.114 11.7775C184.029 69.1515 195.905 66.6839 208.005 66.6839 222.795 66.5717 236.239 71.0584 248.228 79.583 259.992 87.9955 270.188 98.4269 281.504 107.512c24.2 19.405 51.762 34.884 80.78 45.652C372.368 156.866 367.998 173.242 357.803 169.428c-32.492-12.226-62.743-29.387-89.744-51.26-12.549-10.207-23.753-22.8817-38.318-30.1725C215.96 81.0412 200.275 83.7332 185.597 85.1913 171.144 86.6495 155.347 87.0981 142.686 78.6856 129.914 70.161 123.079 54.9064 125.32 39.7639 127.449 24.8458 138.877 12.7318 153.106 8.35734c6.834-2.13116 15.349-2.69202 21.624 1.23381C181.788 13.8535 183.357 22.6025 180.892 30.0054 176.298 44.0262 162.069 56.028 150.641 64.6648c-12.324 9.3098-26.665 16.3763-41.567 20.4143C95.7415 88.6684 81.0642 90.0144 67.9556 84.8548 53.3904 79.1343 44.9874 65.6743 46.78 49.971 48.5727 34.7164 57.0877 17.4428 69.7482 8.24514 82.5208-.952511 99.8869 3.98282 104.032 19.6861c7.283 27.2565-21.6233 45.9883-45.3757 45.3153C29.1898 64.2162 9.6948 40.2125 3.30853 13.0683-4.31018-19.0113 1.96406-54.2315 14.6246-84.1799 17.9858-92.0316 21.7951-99.6589 26.1647-106.95 31.5426-116.26 46.1078-107.847 40.6178-98.5373z'
            fill='currentcolor'
          />
        </svg>
      </div>
    </footer>
  );
};

export default FooterPrimary;
