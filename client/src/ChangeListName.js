import Input from './Input'
import IconButton from './IconButton'
import useStyles from 'substyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

function ChangeListName({ newListName = '', onChange, updateListName }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <Input
        onChange={onChange}
        onKeyDown={({ key }) =>
          key === 'Enter' && newListName && updateListName(newListName)
        }
        style={styles('input')}
        value={newListName}
      />
      <IconButton onClick={updateListName} disabled={!newListName}>
        <FontAwesomeIcon icon={faCheck} />
      </IconButton>
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  input: {
    flexGrow: 1,
    marginRight: 5,
  },
}

export default ChangeListName
