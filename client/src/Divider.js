import colors from './colors'
import useStyles from 'substyle'

function Divider() {
  const styles = useStyles(defaultStyles, {})
  return <div {...styles} />
}

const defaultStyles = {
  borderBottom: `1px solid ${colors.grey}`,
  width: '100%',
}

export default Divider
