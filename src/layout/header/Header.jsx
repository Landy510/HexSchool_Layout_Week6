import logoImg from '@/assets/images/logo.svg';
import { useState } from 'react';
const Header = () => {
  const [isMobileCollapseShow, setIsMobileCollapseShow] = useState(false);

  return (
    <nav 
      className="navbar py-3 py-md-5 border border-top-0 border-start-0 border-end-0 border-black border-3"
    >
      <div className="container-xxl px-3 d-flex align-items-stretch justify-content-normal">
        <a className="navbar-brand d-flex align-items-center me-0 p-0" href="#">
          <img 
            src={logoImg} 
            alt="Logo" 
            className="d-inline-block align-text-top max-width-unset h-full" 
          />
          <div className='d-none d-md-flex align-items-center ms-4'>
            <p className='mb-0 me-1 fs-2'>7TAO</p>
            <p className='mb-0 fw-bold'>活動訂票網</p>
          </div>
        </a>
        <form 
          onSubmit={e => e.preventDefault()}
          className='d-flex mx-5 mx-md-6 flex-grow-1'
          style={{
            width: '1px',
            maxWidth: '333px'
          }}
        >
          <input 
            type="search" 
            className='flex-grow-1 py-2 px-3'
            style={{
              width: '1px'
            }}
          />
          <button 
            type='button'
            className='d-inline-block px-3'
          >
            <i className="icofont-search-1"></i>
          </button>
        </form>
        <button 
          className="btn btn-outline-dark px-3 ms-auto d-md-none" 
          type="button" 
          onClick={() => setIsMobileCollapseShow(prev => !prev)}
        >
          <i className="icofont-navigation-menu"></i>
        </button>
        <div className='d-none d-md-flex align-items-center fs-7 ms-auto'>
          <p className='mb-0 me-5'>
            <i className="icofont-ui-file me-1"></i> 
            REGISTER
          </p>
          <p className='mb-0'>
            <i className="icofont-ui-user me-1"></i> 
            LOGIN
          </p>
        </div>
      </div>
      <div className={[
        isMobileCollapseShow ? 'd-block' : 'd-none',
        'container-fluid px-3 d-md-none'
      ].join(' ')}>
          <div className="card card-body border-0 px-0 pb-0">
            <p>
              <i className="icofont-ui-file me-1"></i> 
              REGISTER
            </p>
            <p className='mb-0'>
              <i className="icofont-ui-user me-1"></i> 
              LOGIN
            </p>
          </div>
      </div>
    </nav>
  )
}

export default Header;