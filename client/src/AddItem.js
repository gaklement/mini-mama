import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from './IconButton'
import Input from './Input'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useStyles from 'substyle'

function AddItem({ currentList, currentListItem, onAddListItem, onChange }) {
  const styles = useStyles(defaultStyle, {})
  return (
    <div {...styles}>
      <div>
        <Input
          onChange={onChange}
          onKeyDown={({ key }, value) => {
            if (key === 'Enter' && currentListItem) {
              onAddListItem(value)
            }
          }}
          placeholder="Produkt eingeben"
          style={styles('addItemInput')}
          value={currentListItem}
        />
        {currentListItem && (
          <div>
            {currentList.items
              .filter((item) => {
                return item.name
                  .toLowerCase()
                  .startsWith(currentListItem.toLowerCase())
              })
              .map((itemMatch) => {
                return <div key={itemMatch.id}>{itemMatch.name}</div>
              })}
          </div>
        )}
      </div>
      <IconButton disabled={!currentListItem} onClick={onAddListItem}>
        <FontAwesomeIcon icon={faPlus} />
      </IconButton>
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  marginBottom: 20,
  addItemInput: {
    flexGrow: 1,
    marginRight: 5,
  },
}

export default AddItem
