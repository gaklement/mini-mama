import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from './IconButton'
import Input from './Input'
import Suggestions from './Suggestions'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import useStyles from 'substyle'

function AddItem({
  currentList,
  currentItemName,
  onAddListItem,
  onChange,
  selectSuggestionAsValue,
}) {
  const styles = useStyles(defaultStyle, {})
  return (
    <div {...styles}>
      <div>
        <Input
          onChange={onChange}
          onKeyDown={({ key }, value) => {
            if (key === 'Enter' && currentItemName) {
              onAddListItem(value)
            }
          }}
          placeholder="Produkt eingeben"
          style={styles('addItemInput')}
          value={currentItemName}
        />
        {currentItemName && (
          <Suggestions
            currentItemName={currentItemName}
            currentList={currentList}
            selectSuggestionAsValue={selectSuggestionAsValue}
          />
        )}
      </div>
      <IconButton disabled={!currentItemName} onClick={onAddListItem}>
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
