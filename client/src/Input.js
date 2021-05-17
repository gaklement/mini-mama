import useStyles from 'substyle'

function Input({ onChange, onKeyDown, placeholder, value }) {
  const styles = useStyles(defaultStyle, {})
  return (
    <input
      {...styles}
      type="text"
      onChange={onChange}
      onKeyDown={({ key }) => {
        if (key === 'Enter') {
          onKeyDown(value)
        }
      }}
      placeholder={placeholder}
      value={value}
    />
  )
}

const defaultStyle = {
  borderRadius: 3,
  border: 'none',
  fontFamily: 'monospace',
  fonSize: 15,
  height: 33,
  paddingLeft: 5,
}

export default Input
