import React from 'react'
import useStyles from 'substyle'
import colors from './colors'

function Button({ disabled, label, onClick }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <button {...styles} disabled={disabled} onClick={onClick}>
      {label}
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
}

export default Button
