import Button from './Button'
import useStyles from 'substyle'

function IconButton(props) {
  const styles = useStyles(defaultStyle, {})

  return <Button {...props} style={styles} />
}

const defaultStyle = {
  width: 35,
}

export default IconButton
