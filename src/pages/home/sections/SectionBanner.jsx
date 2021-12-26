import { Link } from 'react-router-dom';
import HeaderPrimary from '../../../components/header/HeaderPrimary';

export const SectionBanner = () => (
  <section className='banner banner-1 bg-primary rounded-lg wave-block'>
    <HeaderPrimary />
    <div className='container container-delta'>
      <div className='row justify-content-center'>
        <div className='col-lg-12 text-center'>
          <div className='block'>
            <p className='subtitle'>1Sol DEX Aggregator</p>
            <h1 className='title text-xl mb-3'>
              1Sol - An innovative cross-chain
              <br /> aggregator on Solana
            </h1>
            <p className='mb-4'>
              1Sol Protocol is a cross-chain DEX aggregator for decentralized
              protocols on Solana, enabling the most seamless, efficient and
              protected operations in DeFi. With DeFi infrastructure rapidly
              growing, aggregators in high demand, cross-chain transactions
              being the future, 1Sol is born to bring together liquidity from
              both DeFi and CeFi (swaps, orderbook DEX(s), OTC, etc.) for
              multi-chains.
            </p>
            <Link to='/launch-app' className='btn btn-primary m-1'>
              Launch App <i className='arrow-right fas fa-arrow-right' />
            </Link>
            <form
              id='subscribe-form'
              className='banner-form mt-6 d-flex justify-content-center col-xs-10 col-md-10 col-sm-10 col-lg-6 mx-auto'
            >
              <div className='input-group border p-1 rounded-sm'>
                <input
                  type='text'
                  className='form-control shadow-none rounded-sm bg-transparent border-0 text-light'
                  placeholder='foobar@foo.com'
                  aria-label='Email Address'
                  aria-describedby='email-address'
                />
                <a href className='input-group-text btn btn-primary rounded'>
                  <i className='far fa-bell' />
                </a>
              </div>
            </form>
            <p> Subscribe to know first about our events and news. </p>
          </div>
        </div>
      </div>
    </div>
    <div className='has-wave'>
      <svg
        className='wave-left'
        style={{ opacity: '.6' }}
        width={314}
        height={555}
        viewBox='0 0 314 555'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M-211.288 160.789c50.245-38.587 112.1955-66.5014 176.6613-64.4739C23.9312 98.0953 76.9262 128.321 111.188 175.213c17.068 23.214 29.611 49.47 36.901 77.3C151.469 265.75 155.068 280.426 153.724 294.098 153.156 300.073 151.3 306.228 146.713 310.286 143.475 313.15 137.495 315.75 133.31 313.211 123.278 306.914 126.467 286.426 129.765 277.556 134.11 265.743 143.481 255.245 155.294 250.749 182.263 240.527 212.286 257.275 230.464 276.53 269.406 317.842 274.389 389.385 239.503 434.839 235.56 440.055 234.535 446.819 239.583 451.956 243.717 456.172 252.761 456.91 256.745 451.849 296.228 400.505 297.12 324.726 258.433 272.53c-20.341-27.328-53.159-50.148-88.677-48.784-36.691 1.345-65.999 31.494-67.208 68.091C101.964 308.965 108.316 329.559 125.627 336.235 141.795 342.385 160.386 333.91 169.704 320.099 180.204 304.473 178.669 284.419 175.765 266.728 173.027 249.658 168.223 232.975 161.789 217.062 136.013 153.254 84.2331 98.9091 16.718 79.8951-67.0582 56.2534-156.811 88.7884-223.548 139.948-228.686 143.821-231.435 150.381-227.819 156.4-224.764 161.572-216.54 164.859-211.288 160.789z'
          fill='currentcolor'
        />
      </svg>
      <svg
        className='wave-right'
        style={{ opacity: '.6' }}
        width={316}
        height={405}
        viewBox='0 0 316 405'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M434.703 355.017c-58.52 24.268-125.584 35.197-187.329 16.554-56.101-16.875-99.468-59.787-120.425-113.949-10.479-26.84-15.799-55.448-15.638-84.217C111.472 159.744 111.795 144.636 116.631 131.779 118.727 126.154 122.112 120.689 127.594 117.957 131.463 116.029 137.911 115.064 141.297 118.6 149.357 127.279 140.974 146.244 135.493 153.958c-7.255 10.286-19.023 18.001-31.598 19.286-28.6954 2.893-53.3609-21.054-65.9355-44.358C11.037 78.9026 24.7401 8.50797 70.202-26.3679c5.1588-4.018 7.8994-10.2861 4.3527-16.5541C71.6529-48.065 63.1086-51.1186 57.9498-47.2613 6.52307-7.88531-13.9509 65.0808 9.90854 125.511 22.4831 157.172 48.2771 187.709 82.9378 195.584c35.7892 8.197 71.9012-13.339 82.5412-48.376C170.476 130.815 169.67 109.278 154.677 98.3496 140.652 88.2243 120.5 91.5994 107.926 102.528c-14.187 12.376-17.8949 32.144-19.6682 49.984C86.4844 169.709 86.8069 187.066 88.9027 204.102 97.2857 272.408 133.236 338.302 193.53 374.142 268.332 418.662 363.447 410.465 441.152 378.321 447.117 375.91 451.469 370.285 449.535 363.535 447.923 357.749 440.829 352.445 434.703 355.017z'
          fill='currentcolor'
        />
      </svg>
    </div>
  </section>
);
