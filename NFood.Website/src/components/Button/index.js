import * as React from 'react';
import './button-style.scss'


export const FilledButton = ({
  className,
  text,
  onClick,
  type,
  disabled = false
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`main-button ${className}`}
      onClick={onClick}>
      <h4>{text}</h4>
    </button>
  )
}


export const OutlineButton = ({
  className,
  text,
  onClick,
  type,
  disabled = false,
}) => {
  return (
    <button
      className={`main-button outline ${className}`}
      onClick={onClick}>
      <h4>{text}</h4>
    </button>
  )
}
