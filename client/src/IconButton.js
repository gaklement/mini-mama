import Button from './Button'
import useStyles from 'substyle'

function IconButton({ small, style, ...rest }) {
  const styles = useStyles(defaultStyle, { style }, { '&small': small })

  return <Button {...rest} style={styles} />
}

const defaultStyle = {
  width: 36,
  '&small': {
    width: 20,
    height: 20,
    fontSize: 12,
  },
}

export default IconButton
