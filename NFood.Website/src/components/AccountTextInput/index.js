import * as React from 'react';
import { Icon } from "@components/Icon";
import './AccountTextInput.scss'


const AccountTextInput = ({
  className,
  name,
  style,
  hint,
  enableRightButton = false,
  rightButtonType = "none",
  rightIconToggleOn,
  rightIconToggleOff,
  error,
  onChange,
  value,
  isSubmitting,
  type
}) => {
  const [toggle, setToggle] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const getTypeInput = (toggle) => {
    if (type === 'password' && !isSubmitting)
      return toggle ? 'text' : 'password'
    return type;
  }

  const getRightIcon = (toggle) => {
    switch (rightButtonType) {
      case "toggle":
        return toggle ? rightIconToggleOn : rightIconToggleOff
      default:
        return undefined
    }
  }

  return (
    <div className={`account-input ${className}`}>
      <div className={
        `input-contain 
        ${(isFocused && !isSubmitting) && 'focusing'}
        ${(Boolean(error) && !isSubmitting) && 'on-error'}`
      }>
        <input
          className='input-field'
          name={name}
          value={value}
          type={getTypeInput(toggle)}
          placeholder={Boolean(hint) ? hint : ''}
          onChange={event => {
            if (onChange)
              onChange(event);
          }}
          onBlur={(event) => setIsFocused(false)}
          onFocus={(event) => setIsFocused(true)}
        />

        <div
          className='right-icon'
          onClick={() => {
            if (!isSubmitting)
              setToggle(!toggle)
          }}>
          {Boolean(enableRightButton) &&
            <Icon icon={getRightIcon(toggle)} />
          }
        </div>
      </div>
      {
        (Boolean(error) && !isSubmitting) &&
        <p className='input-error-text'>{error}</p>
      }
    </div >
  )
}

export default AccountTextInput;