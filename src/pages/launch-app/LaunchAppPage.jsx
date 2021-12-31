import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderPrimary from '../../components/header/HeaderPrimary';
import SectionStatistics from './sections/SectionStatistics';
import SectionToken from './sections/SectionToken';
import './style.css';

const LaunchAppPage = () => {
  const [select, setSelect] = useState(true);
  const [tabs, setTabs] = useState(1);
  const [data, setData] = useState(null);

  const toggleTab = (index, value) => {
    setTabs(index);
  };

  useEffect(() => {
    axios
      .get(`http://8.12.17.75:3004/v1/pool/01`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeData = (value) => {
    switch (value) {
      case 1:
        axios
          .get(`http://8.12.17.75:3004/v1/pool/01`)
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case 2:
        axios
          .get(`http://8.12.17.75:3004/v1/pool/1`)
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case 3:
        axios
          .get(`http://8.12.17.75:3004/v1/pool/10`)
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      case 4:
        axios
          .get(`http://8.12.17.75:3004/v1/pool/100`)
          .then((res) => {
            console.log(res);
            setData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
        break;

      default:
        console.log(`Sorry, we are out of ${value}.`);
    }
  };

  if (data === null) {
    return (
      <section className='min-vh-100 d-flex justify-content-center align-items-center'>
        <div>
          <h1 className='mb-0'>Loading...</h1>
        </div>
      </section>
    );
  }

  return (
    <main className='mb-5'>
      <section className='banner banner-1 bg-primary rounded-lg wave-block'>
        <HeaderPrimary />
        <div className='container container-launchApp py-5 mb-5'>
          <div className='col col-md-10 mx-auto'>
            <div className='row'>
              <div className='col'>
                <SectionToken
                  onClick={() => setSelect(!select)}
                  select={select}
                  tabs={tabs}
                  onTab1={() => {
                    toggleTab(1);
                    changeData(1);
                  }}
                  onTab2={() => {
                    toggleTab(2);
                    changeData(2);
                  }}
                  onTab3={() => {
                    toggleTab(3);
                    changeData(3);
                  }}
                  onTab4={() => {
                    toggleTab(4);
                    changeData(4);
                  }}
                />
              </div>
              <div className='col-12 col-lg-6 mt-3 mt-lg-0'>
                <SectionStatistics tabs={tabs} data={data} />
              </div>
            </div>
          </div>
        </div>
        {/* === */}
        <div className='has-wave'>
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
    </main>
  );
};

export default LaunchAppPage;
