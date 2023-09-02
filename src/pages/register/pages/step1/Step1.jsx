import styles from './step1.module.scss';
import sparkler1Img from '@/assets/images/sparkler1.png';

const Step1 = () => {
  return (
    <div className='mt-5 mt-md-6'>
      <h2 
        className={[
          'text-start text-md-center fw-bold',
          styles['title']
        ].join(' ')}
      >返老還童-制服聯誼</h2>
      <ul className='ps-0 border border-2 border-black border-bottom-0 border-start-0 border-end-0 mb-7 mb-md-6'>
        <li className='d-flex justify-content-between border border-black border-top-0 border-start-0 border-end-0 py-2'>
          <span className='fw-bold'>日期</span>
          <span className='font-family-Noto-Sans-TC'>
            <time>2023/5/12</time>
          </span>
        </li>
        <li className='d-flex justify-content-between border border-black border-top-0 border-start-0 border-end-0 py-2'>
          <span className='fw-bold'>票種</span>
          <span className='font-family-Noto-Sans-TC'>
          改頭換面票（含大改造 )
          </span>
        </li>
        <li className='d-flex justify-content-between border border-black border-top-0 border-start-0 border-end-0 py-2'>
          <span className='fw-bold'>票價</span>
          <span className='font-family-Noto-Sans-TC'>
            $8000
          </span>
        </li>
      </ul>
      <img 
        className='mx-auto d-block'
        src={sparkler1Img} 
        width={32}
        height={32}
        alt="" 
      />
      <p className='fw-bold fs-4 text-center'>聯絡人資料</p>
      <form onSubmit={e => e.preventDefault()}>
        <label 
          htmlFor="name"
          className='font-family-Noto-Sans-TC mb-2'
        >聯絡人姓名</label>
        <input 
          type="text" 
          id="name" 
          className='mb-3'
          placeholder='請輸入聯絡人名稱'
        />
        <label 
          htmlFor="email"
          className='font-family-Noto-Sans-TC mb-2'
        >Email</label>
        <input 
          type="email" 
          id="email" 
          className='mb-3'
          placeholder='請輸入Email'
        />
        <label 
          htmlFor="tel"
          className='font-family-Noto-Sans-TC mb-2'
        >手機</label>
        <input 
          type="tel" 
          id="tel" 
          placeholder='請輸入手機號碼'
        />
        <button 
          type='button'
          className={
            [
              'btn bg-dark text-white d-block w-full py-2 rounded-0 mt-6 mx-auto font-family-Noto-Sans-TC',
            ].join(' ')
          }
          style={{
            maxWidth: '416px',
            fontSize: '20px'
          }}
        >
          確認表單資料
          <i className="icofont-double-right"></i>
        </button>
        <button 
          type='button'
          className='fs-5 bg-transparent text-dark mx-auto mt-3 border-0 d-block font-family-Noto-Sans-TC'
        >取消購票</button>
      </form>
    </div>
  )
}

export default Step1;