import groupImg from '@/assets/images/Group.png';
import heartImg from '@/assets/images/heart1.png';
import menuImg from '@/assets/images/museum1.png';
import cutleryImg from '@/assets/images/cutlery1.png';
import snowedmountainsImg from '@/assets/images/snowed-mountains1.png';
import styles from './index.module.scss';
import Option from './components/option/Option';

const Index = () => {
  return (
    <div>
      <div className={styles['hero-img']}>
        <h2 className='font-family-Yeseva-One text-white mb-0'>
          19 MAY 
          <br className='d-md-none' />
          <span className='d-none d-md-inline'>&nbsp;</span>2023
        </h2>
        <div className='mt-auto text-white'>
          <h3 className='text-center mb-3 fw-bold'>隔牆有耳-沒有草東的派對</h3>
          <p className='d-none d-md-block text-center font-family-Noto-Sans-TC mb-0'>
            你各位聽團仔們！每次想跟朋友一起聽草東專場卻每一次都搶不到票？「草東沒有派對」永遠都是「草東沒有門票」！
            <br />
            帶上啤酒、野餐墊，讓我們在Live House外面一起開場「沒有草東的派對」吧！
          </p>
        </div>
      </div>
      <div className="container-fluid px-0 mt-7 mt-md-6">
        <div className="row g-2 g-md-5">
          <div className="col-4 col-md-2">
            <Option 
              optionImg={groupImg} 
              optionTxt='演出'
            />
          </div>
          <div className="col-4 col-md-2">
            <Option 
              optionImg={heartImg} 
              optionTxt='聯誼'
            />
          </div>
          <div className="col-4 col-md-2">
            <Option 
              optionImg={menuImg} 
              optionTxt='展覽'
            />
          </div>

          <div className="col-4 col-md-2">
            <Option 
              optionImg={cutleryImg} 
              optionTxt='美食'
            />
          </div>
          <div className="col-4 col-md-2">
            <Option 
              optionImg={snowedmountainsImg} 
              optionTxt='戶外'
            />
          </div>
          <div className="col-4 col-md-2">
            <a 
              href="#"
              className={[
                'bg-dark d-flex align-items-center justify-content-center h-full text-warning fw-bold',
                styles['read-more-btn']
              ].join(' ')}
            >
              探索 <br /> 更多
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;