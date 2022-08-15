import React from 'react'
import PropTypes from 'prop-types'
import { getStarClass } from '../utils'

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating my-3">
      <span>
        <i style={{ color }} className={getStarClass(value, 1)}></i>
      </span>
      <span>
        <i style={{ color }} className={getStarClass(value, 2)}></i>
      </span>
      <span>
        <i style={{ color }} className={getStarClass(value, 3)}></i>
      </span>
      <span>
        <i style={{ color }} className={getStarClass(value, 4)}></i>
      </span>
      <span>
        <i style={{ color }} className={getStarClass(value, 5)}></i>
      </span>
      <span className="px-2 numReviews">{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#FFA41C',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
