import Button from './Button'
import useStyles from 'substyle'

function IconButton({ style, ...rest }) {
  const styles = useStyles(defaultStyle, { style })

  return <Button {...rest} style={styles} />
}

const defaultStyle = {
  width: 35,
}

export default IconButton