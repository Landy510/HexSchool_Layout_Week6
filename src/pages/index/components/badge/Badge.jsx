import { memo } from "react";
import PropTypes from 'prop-types';
import styles from './badge.module.scss';
const Badge = memo(function Badge({
  text,
  styleClass
}) {
  return (
    <span className ={
      [
        styles['badge'],
        styleClass,
        'fw-bold'
      ].join(' ')
    }>{text}</span>
  )
})

export default Badge;

Badge.propTypes = {
  text: PropTypes.string,
  styleClass: PropTypes.arrayOf(PropTypes.string)
}