import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderPrimary = () => {
  const [show, setShow] = React.useState(true);
  return (
    <header className='navigation'>
      <div className='container container-delta'>
        <nav className='navbar navbar-expand-xl navbar-light'>
          <Link
            className='navbar-brand'
            to='/'
            title='1Sol - An innovative cross-chain aggregator on Solana'
          >
            <img
              className='img-fluid'
              width='147px'
              height={200}
              src='/assets/logo.webp'
              alt='1Sol - An innovative cross-chain aggregator on Solana'
            />
          </Link>
          <div className='navbar-actions'>
            <button
              aria-label='navbar toggler'
              className='navbar-toggler border-0'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navigation'
              onClick={() => setShow(!show)}
            >
              <i className='d-inline fas fa-bars' />
              <i className='d-none far fa-times-circle' />
            </button>
          </div>
          <div
            className={`${show && 'collapse'} navbar-collapse text-center`}
            id='navigation'
          >
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/how-it-works'>
                  How It Works
                </NavLink>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  target='_blank'
                  rel='noreferrer'
                  href='https://medium.com/@1solProtocol'
                >
                  Blog
                </a>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/team/'>
                  Team
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact/'>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className='navbar-right'>
              <NavLink to='/launch-app' className='btn btn-primary'>
                Launch App
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderPrimary;
