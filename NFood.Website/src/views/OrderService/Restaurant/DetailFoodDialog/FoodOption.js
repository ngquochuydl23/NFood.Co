import React from 'react'
import './detail-food-dialog.scss'
import _ from 'lodash';


const GroupOption = ({
  title, subtitle, optional, options
}) => {

  const OptionItem = ({ title, cost }) => {
    return (
      <div className='option-item'>
        <p className='option-title'>{title}</p>
      </div>
    )
  }

  return (
    <div className='option-group'>
      <h4 className='group-title'>{title}</h4>
      {!optional && <p className='required-text'>Required</p>}
      {_.map(options, (option, idx) =>
        <OptionItem {...option} />
      )}
    </div>
  )
}

export default GroupOption;