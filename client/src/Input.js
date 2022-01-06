import useStyles from 'substyle'

function Input({ onChange, onKeyDown, placeholder, style, value }) {
  const styles = useStyles(defaultStyle, { style })
  return (
    <input
      {...styles}
      type="text"
      onChange={onChange}
      onKeyDown={(event) => onKeyDown(event, value)}
      placeholder={placeholder}
      value={value}
    />
  )
}

const defaultStyle = {
  borderRadius: 3,
  border: 'none',
  fontFamily: 'monospace',
  fontSize: 15,
  marginTop: '0em',
  marginBottom: '0em',
  paddingLeft: 5,
}

export default Input
