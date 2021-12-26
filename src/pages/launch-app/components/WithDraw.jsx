import React from 'react';
import ReactTooltip from 'react-tooltip';

const WithDraw = () => {
  return (
    <div>
      <form noValidate>
        <ul className='nav flex-column gap-3'>
          <li>
            <div>
              <label className='d-block' htmlFor='note'>
                Note
                <i
                  data-tip
                  data-for='noteTip'
                  className='fa fa-info-circle text-info ms-1'
                >
                  <ReactTooltip
                    id='noteTip'
                    effect='solid'
                    backgroundColor='#62A8CA'
                  >
                    Please enter the note you received when you made the deposit
                  </ReactTooltip>
                </i>
              </label>
              <input
                type='text'
                name='note'
                id='note'
                className='input-group-text w-100 py-1 text-start bg-transparent text-white'
                placeholder='Please enter your note'
              />
            </div>
          </li>
          <li>
            <div>
              <div className='d-flex justify-content-between'>
                <label className='d-block' htmlFor='address'>
                  Recipient Address
                </label>
                <a
                  href
                  className='text-quaternary small text-decoration-underline'
                >
                  <small>Donate</small>
                </a>
              </div>
              <input
                type='text'
                name='address'
                id='address'
                className='input-group-text w-100 py-1 text-start bg-transparent text-white'
                placeholder='Please paste address here'
              />
            </div>
          </li>
          <li>
            <div className='mt-1'>
              <button type='submit' className='btn btn-primary fw-bold w-100'>
                Withdraw
              </button>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default WithDraw;
