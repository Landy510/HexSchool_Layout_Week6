import styles from './progressBar.module.scss';
const ProgressBar = () => {
  return (
    <div className={styles['step-list']}>
      <div className='text-center'>
        <div className={[
          styles['step'],
          styles['active']
        ].join(' ')}>
          <p className='mb-0 fw-bold'>訂單確認</p>
        </div>     
      </div>
      <div>
        <div className={styles['step']}>
          <p className='mb-0 fw-bold'>結帳付款</p>
        </div>
      </div>
      <div>
        <div className={styles['step']}>
          <p className='mb-0 fw-bold'>訂購結果</p>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar;