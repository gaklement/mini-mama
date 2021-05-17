import React from 'react'
import useStyles from 'substyle'
import colors from './colors'

function Button({ disabled, children, onClick, secondary, style }) {
  const styles = useStyles(
    defaultStyle,
    { style },
    { '&secondary': secondary, '&disabled': disabled }
  )

  return (
    <button {...styles} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

const defaultStyle = {
  backgroundColor: colors.apricot,
  border: 'none',
  borderRadius: 3,
  color: colors.apricotDark,
  fontFamily: 'monospace',
  fontSize: 15,
  height: 35,
  width: 135,

  '&disabled': {
    backgroundColor: colors.apricotDisabled,
    color: colors.greyDisabled,
  },
  '&secondary': {
    backgroundColor: colors.grey,
    color: colors.darkGrey,
  },
}

export default Button
