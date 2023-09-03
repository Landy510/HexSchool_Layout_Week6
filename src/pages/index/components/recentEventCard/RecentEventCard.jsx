import { memo } from "react";
import PropTypes from 'prop-types';
import styles from './recentEventCard.module.scss';

import sparkler1_optionImg from '@/assets/images/sparkler1_option.png';

const RecentEventCard = memo(function RecentEventCard({
  timeTxt,
  imgSrc,
  contentTitle,
  content,
  tagTxt, 
  navigateTxt
}) {
  return (
    <div className="d-flex flex-column">
      <p className={[
        styles['dateTime'],
        'font-family-Yeseva-One mb-4 mb-md-3 border border-dark border-3 border-top-0 border-start-0 border-end-0'
      ].join(' ')}>
        <time>{timeTxt}</time>
      </p>
      <img src={imgSrc} alt="" />
      <p className="fs-7 fs-md-4 fw-bold my-2 my-md-3">{contentTitle}</p>
      <p 
        className="font-family-Noto-Sans-TC"
        style={{
          flexGrow: 1
        }}
      >{content}</p>
      <div className="d-flex align-items-center justify-content-between fw-bold py-2 py-md-3 border border-2 border-dark border-start-0 border-end-0">
        <span className="d-flex">
          <img 
            src={sparkler1_optionImg} 
            alt="" 
            width={20}
            height={20}
          />
          {tagTxt}
        </span>
        
        <a href="#">
          {navigateTxt}
          <i className="icofont-double-right"></i>
        </a>
      </div>
    </div>
  )
})

export default RecentEventCard;

RecentEventCard.propTypes = {
  timeTxt: PropTypes.string,
  imgSrc: PropTypes.string,
  contentTitle: PropTypes.string,
  content: PropTypes.string,
  tagTxt: PropTypes.string,
  navigateTxt: PropTypes.string 
}