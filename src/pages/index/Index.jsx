import groupImg from '@/assets/images/Group.png';
import heartImg from '@/assets/images/heart1.png';
import menuImg from '@/assets/images/museum1.png';
import cutleryImg from '@/assets/images/cutlery1.png';
import snowedmountainsImg from '@/assets/images/snowed-mountains1.png';
import rectangle2Img from '@/assets/images/Rectangle2.png';
import rectangle3Img from '@/assets/images/Rectangle3.png';
import rectangle4Img from '@/assets/images/Rectangle4.png';
import rectangle5Img from '@/assets/images/Rectangle5.png';
import rectangle6Img from '@/assets/images/Rectangle6.png';
import rectangle8Img from '@/assets/images/Rectangle8.png';
import onlineSectionImg from '@/assets/images/online_section_img.png';
import tiltCardImg from '@/assets/images/tilt-card1.png';
import tiltCard2Img from '@/assets/images/tilt-card2.png';
import tiltCard3Img from '@/assets/images/tilt-card3.png';
import tiltCard4Img from '@/assets/images/tilt-card4.png';
import styles from './index.module.scss';
import Option from './components/option/Option';
import RecentEventCard from './components/recentEventCard/RecentEventCard';
import Badge from './components/badge/Badge';
import CustomizedSwiper from './components/swiper/CustomizedSwiper';

const Index = () => {
  return (
    <>
    <div className="container-xxl px-3 py-5">
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
      <div className={[
        'd-flex align-items-center justify-content-between border border-dark border-3 py-4 py-md-5 px-3 px-md-7 mt-7 mt-md-6',
        styles['recent-section']
      ].join(' ')}>
        <span className='font-family-Yeseva-One'>RECENT</span>
        <span className='fw-bold'>近期活動</span>
      </div>
      <div className='container-fluid px-0 mt-5 mt-md-7'>
        <div className="row gy-5 gy-md-6">
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='19 MAY 2023'
              imgSrc={rectangle2Img}
              contentTitle='邪典電影派對——房間'
              content='你有聽說過「大災難家」裡面的主角 Tommy Wiseau 製作的「史上最爛的電影」——房間嗎？在美國甚至演變成一種邪教、一種派對的形式，...'
              tagTxt='社群活動'
              navigateTxt='開賣中'
            />
          </div>
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='23 MAY 2023'
              imgSrc={rectangle3Img}
              contentTitle='怪舞俱樂部'
              content='覺得自己的舞蹈細胞異於常人？每次隨著音樂起舞身邊的人總是露出無法理解的表情？來這裡就對了！來參加這場一起跳舞的聚會，也會在每一次的舞會中選出舞步最怪的...'
              tagTxt='演出'
              navigateTxt='檢視活動'
            />
          </div>
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='19 MAY 2023'
              imgSrc={rectangle4Img}
              contentTitle='哈利波特馬拉松'
              content='每次身邊有人開啟哈利波特的話題，自己永遠都是聽不懂的那個麻瓜？看大家在討論魁地奇、用咒語鬥法的時候，自己永遠是陪笑的那個人？穿好你的法袍、帶上你的法杖...'
              tagTxt='聯誼'
              navigateTxt='開賣中'
            />
          </div>
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='12 June 2023'
              imgSrc={rectangle5Img}
              contentTitle='皮卡丘排球大賽'
              content='還記得小時候玩的小遊戲嗎？總是有朋友吹噓自己獨孤求敗、只求一敗？是時候該展現真正的實力了！本活動採用瑞士制賽程，以絕對公平的方式進行，是時候該證明自己...'
              tagTxt='遊戲競賽'
              navigateTxt='開賣中'
            />
          </div>
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='25 June 2023'
              imgSrc={rectangle6Img}
              contentTitle='酒精路跑'
              content='身邊總是有對自己酒量有高度自信的朋友嗎？拉著他/她一起來參加酒精路跑吧！一起拍下第一杯直到倒下為止的照片，一起喝遍市區內各家極具品味的酒吧。'
              tagTxt='社群活動'
              navigateTxt='開賣中'
            />
          </div>
          <div className="col-12 col-md-4">
            <RecentEventCard 
              timeTxt='9 July 2023'
              imgSrc={rectangle8Img}
              contentTitle='展覽——我的房間'
              content='每個人的房間總會有那麼一兩個能代表自己的物事，或許是再平凡不過的牙刷、馬克杯，或許有那些別人的房間從沒出現過的小東西——那些能定義自己的特別的東西。'
              tagTxt='展覽'
              navigateTxt='開賣中'
            />
          </div>
        </div>
      </div>
      <div className={[
        'd-flex align-items-center justify-content-between border border-dark border-3 py-4 py-md-5 px-3 px-md-7 mt-7 mt-md-6',
        styles['recent-section']
      ].join(' ')}>
        <span className='font-family-Yeseva-One'>ONLINE</span>
        <span className='fw-bold'>線上活動</span>
      </div>
      <div className="container-fluid px-0 mt-5 mt-md-7">
          <div className="row">
            <div className="col-12 col-md-6 d-flex">
              <img 
                src={onlineSectionImg} 
                alt="" 
                style={{
                  maxHeight: '317px',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="col-12 col-md-6">
              <p className='fs-2 fw-bold mt-3 mt-md-0 mb-2'>切特居批踢</p>
              <div className='mb-3 mb-md-7'>
                <Badge 
                  text='競賽' 
                  styleClass={['me-2']}
                />
                <Badge 
                  text='科技' 
                  styleClass={['me-2']}
                />
                <Badge 
                  text='有趣' 
                  styleClass={['me-2']}
                />
              </div>
              <p className='font-family-Noto-Sans-TC mb-3 mb-md-7'>
                最近網路上很流行的AI程式 ChatGPT，可以用來聊天或是查詢、整理各種資料，不同的應用方式如雨後春筍般冒出來。 <br />
                這個活動讓大家把自己最有特色的使用方法提出來讓大家參考，也會投票出最有趣的用法。 <br />
                該讓其他人知道自己使用 ChatGPT 的姿勢才是最特別的那個了！
              </p>
              <button 
                type='button'
                className={
                  [
                    'btn bg-dark text-white d-block w-full py-2 rounded-0 font-family-Noto-Sans-TC',
                  ].join(' ')
                }
                style={{
                  fontSize: '20px'
                }}
              >
                查看活動詳情
                <i className="icofont-double-right"></i>
              </button>
            </div>
          </div>
      </div>
    </div>
    <CustomizedSwiper />
    <div className='container-xxl px-3 my-6'>
        <div className="row gy-6">
          <div className="col-12 col-md-3">
            <div className={[
              "border border-dark border-2 p-3 pt-0 mx-5 mx-md-0",
              styles['tilt-card']
            ].join(' ')}>
              <p className={[
                'd-inline-block mx-auto mb-0 py-3 px-4 bg-white fw-bold',
                styles['card-title']
              ].join(' ')}
              >社群活動</p>
              <img 
                src={tiltCardImg } 
                alt="" 
                className='my-3'
              />
              <p className='fs-5 fw-bold'>無聲派對-閉閉嘴dancing</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div 
              className={[
                "border border-dark border-2 p-3 pt-0 mx-5 mx-md-0",
                styles['tilt-card']
              ].join(' ')}
              style={{transform: 'rotate(2deg)'}}
            >
              <p className={[
                'd-inline-block mx-auto mb-0 py-3 px-4 bg-white fw-bold',
                styles['card-title']
              ].join(' ')}
              >藝文活動</p>
              <img 
                src={tiltCard2Img } 
                alt="" 
                className='my-3'
              />
              <p className='fs-5 fw-bold'>拯救老店大作戰</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div 
              className={[
                "border border-dark border-2 p-3 pt-0 mx-5 mx-md-0",
                styles['tilt-card']
              ].join(' ')}
              style={{transform: 'rotate(-2deg)'}}
            >
              <p className={[
                'd-inline-block mx-auto mb-0 py-3 px-4 bg-white fw-bold',
                styles['card-title']
              ].join(' ')}
              >自我覺察</p>
              <img 
                src={tiltCard3Img } 
                alt="" 
                className='my-3'
              />
              <p className='fs-5 fw-bold'>內觀修行-部落篇</p>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div 
              className={[
                "border border-dark border-2 p-3 pt-0 mx-5 mx-md-0",
                styles['tilt-card']
              ].join(' ')}
              style={{transform: 'rotate(2deg)'}}
            >
              <p className={[
                'd-inline-block mx-auto mb-0 py-3 px-4 bg-white fw-bold',
                styles['card-title']
              ].join(' ')}
              >聯誼活動</p>
              <img 
                src={tiltCard4Img } 
                alt="" 
                className='my-3'
              />
              <p className='fs-5 fw-bold'>賞櫻野餐</p>
            </div>
          </div>
          
        </div>
    </div>
    <CustomizedSwiper />
    <div className="container-xxl px-3 my-6">
      <div className='row gx-0'>
        <div className="col-12 col-md-6">
          <div className='border border-dark border-3 mb-5 mb-md-0'>
            <p className='fs-4 fw-bold border border-3 border-dark border-top-0 border-start-0 border-end-0 mb-0 py-3 ps-4'>#FOLLOW US</p>
            <div className='py-4 px-3'>
              <p className='mb-4 font-family-Noto-Sans-TC'>
                想第一時間獲得新奇有趣的活動資訊？
                追蹤我們的社群吧！
                也歡迎你聯繫我們，提供好玩有趣的活動企劃。
              </p>
              <p>
                <i 
                  className="icofont-ui-email d-inline-block bg-dark text-white me-4"
                  style={{
                    width: '32px',
                    height: '32px',
                    textAlign: 'center',
                    lineHeight: '32px'
                  }}
                ></i>
                <a 
                  href="mailto:7tao.event@gmail.com"
                  className='font-family-Noto-Sans-TC'
                >7tao.event@gmail.com</a>
              </p>
              <p>
                <i 
                  className="icofont-phone d-inline-block bg-dark text-white me-4"
                  style={{
                    width: '32px',
                    height: '32px',
                    textAlign: 'center',
                    lineHeight: '32px'
                  }}
                ></i>
                <a 
                  href="tel:09123123123"
                  className='font-family-Noto-Sans-TC'
                >09123123123</a>
              </p>
              <p className='mb-0'>
                <i 
                  className="icofont-facebook d-inline-block bg-dark text-white me-4"
                  style={{
                    width: '32px',
                    height: '32px',
                    textAlign: 'center',
                    lineHeight: '32px'
                  }}
                ></i>
                <a 
                  href="#"
                  className='font-family-Noto-Sans-TC'
                >7TAO七逃</a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column">
          <form 
              onSubmit={e => e.preventDefault()}
              className={[
                'd-flex flex-column flex-grow-1',
                styles['subscribe-section']
              ].join(' ')}
            >
              <p className='fs-4 fw-bold border border-3 border-dark border-top-0 border-start-0 border-end-0 mb-0 py-3 ps-4'>#SUBSCRIBE US</p>
              <div className='py-4 px-3 flex-grow-1'>
                <p className='mb-4 font-family-Noto-Sans-TC'>
                  訂閱電子報送折價券！ <br />
                  定期精選文章資訊及最新優惠資訊， <br />
                  還不通通給我訂閱起來？
                </p>
                <input 
                  type="email" 
                  placeholder='輸入Email'
                />
              </div>
              <button 
                  type='button'
                  className={
                    [
                      'btn bg-dark text-white d-block w-full py-2 rounded-0 font-family-Noto-Sans-TC',
                    ].join(' ')
                  }
                  style={{
                    fontSize: '20px'
                  }}
                >
                  確認訂閱
                  <i className="icofont-double-right"></i>
              </button>
            </form>
        </div>
      </div>
    </div>
    <div 
      className={[
        'border border-dark border-3 border-start-0 border-end-0 border-bottom-0',
        styles['last-section']
      ].join(' ')}
    >
      <p className='fw-bold text-center'>此刻打盹，你將做夢；此刻學習，你將圓夢</p>
      <p className='fw-bold text-center'>——我也不知道誰說的</p>
    </div>
    </>
    
  )
}

export default Index;