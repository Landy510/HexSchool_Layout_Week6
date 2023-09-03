
import PropTypes from 'prop-types';
import styles from './option.module.scss';
import { memo } from 'react';

const Option = memo(function Option({
  optionImg,
  optionTxt
}) {
  return (
    <a 
      href="#"
      className={[
        'border border-dark border-2',
        styles['option']
      ].join(' ')}
    >
      <img src={optionImg} alt="" />
      <p className='mb-0 fw-bold mt-2 mt-md-3'>{optionTxt}</p>
    </a>
  )
}) 

export default Option;

Option.propTypes = {
  optionImg: PropTypes.string,
  optionTxt: PropTypes.string,
}