import Button from './Button'
import useStyles from 'substyle'

function IconButton({ children, onClick }) {
  const styles = useStyles(defaultStyle, {})

  return <Button onClick={onClick} style={styles} children={children} />
}

const defaultStyle = {
  width: 35,
}

export default IconButton
