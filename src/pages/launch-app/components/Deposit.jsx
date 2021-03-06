import React from 'react';
import ReactTooltip from 'react-tooltip';

const Deposit = ({ onTab1, onTab2, onTab3, onTab4, active }) => {
  return (
    <div>
      <form noValidate>
        <ul className='nav flex-column gap-3'>
          <li>
            <div>
              <label className='d-block' htmlFor='select'>
                Token
              </label>
              <select
                name='select'
                id='select'
                className='form-select w-100 py-1 text-start shadow-lg bg-primary-1 text-white'
              >
                <option value='ETH'>ETH</option>
                <option value='DAI'>DAI</option>
                <option value='cDAI'>cDAI</option>
                <option value='USDC'>USDC</option>
                <option value='USDT'>USDT</option>
                <option value='WBTC'>WBTC</option>
              </select>
            </div>
          </li>
          <li>
            <div>
              <label className='d-block'>
                Amount
                <i
                  data-tip
                  data-for='amountTip'
                  className='fa fa-info-circle text-info ms-1'
                >
                  <ReactTooltip
                    id='amountTip'
                    effect='solid'
                    backgroundColor='#62A8CA'
                  >
                    Each amount is a standalone Tornado Cash instance with a
                    separate anonymity set. Check the stats tab for more info.
                  </ReactTooltip>
                </i>
              </label>
              <ul className='nav small justify-content-between position-relative'>
                <hr className='line' />
                <li className='px-2 position-relative'>
                  <label
                    onClick={onTab1}
                    for='check1'
                    className={`text-center deposit-nav-item fs-6 ${
                      active === 1 && 'active'
                    }`}
                  >
                    <span
                      onClick={onTab1}
                      className={`check-dot ${active === 1 && 'active'}`}
                    />
                    <label
                      for='check1'
                      onClick={onTab1}
                      className='d-block text-uppercase'
                    >
                      0.1 ETH
                    </label>
                  </label>
                </li>
                <li className='px-2 position-relative'>
                  <label
                    onClick={onTab2}
                    for='check2'
                    className={`text-center deposit-nav-item fs-6  ${
                      active === 2 && 'active'
                    }`}
                  >
                    <span
                      onClick={onTab2}
                      className={`check-dot ${active === 2 && 'active'}`}
                    />
                    <label
                      for='check2'
                      onClick={onTab2}
                      className='d-block text-uppercase'
                    >
                      1 ETH
                    </label>
                  </label>
                </li>
                <li className='px-2 position-relative'>
                  <label
                    onClick={onTab3}
                    for='check3'
                    className={`text-center deposit-nav-item fs-6  ${
                      active === 3 && 'active'
                    }`}
                  >
                    <span
                      onClick={onTab3}
                      className={`check-dot ${active === 3 && 'active'}`}
                    />
                    <label
                      for='check3'
                      onClick={onTab3}
                      className='d-block text-uppercase'
                    >
                      10 ETH
                    </label>
                  </label>
                </li>
                <li className='px-2 position-relative'>
                  <label
                    onClick={onTab4}
                    for='check4'
                    className={`text-center deposit-nav-item fs-6  ${
                      active === 4 && 'active'
                    }`}
                  >
                    <span
                      onClick={onTab4}
                      className={`check-dot ${active === 4 && 'active'}`}
                    />
                    <label
                      onClick={onTab4}
                      className='d-block text-uppercase'
                      for='check4'
                    >
                      100 ETH
                    </label>
                  </label>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className='mt-1'>
              <button type='submit' className='btn btn-primary fw-bold w-100'>
                Connect
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Deposit;
