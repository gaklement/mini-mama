import Input from './Input'
import IconButton from './IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useStyles from 'substyle'

function AddItem({ currentListItem, onAddListItem, onChange }) {
  const styles = useStyles(defaultStyle, {})
  return (
    <div {...styles}>
      <Input
        onChange={onChange}
        onKeyDown={onAddListItem}
        placeholder="Produkt eingeben"
        style={styles('addItemInput')}
        value={currentListItem}
      />

      <IconButton disabled={!currentListItem} onClick={() => onAddListItem()}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  addItemInput: {
    flexGrow: 1,
    marginRight: 5,
  },
}

export default AddItem
