import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from './IconButton'
import Input from './Input'
import Suggestions from './Suggestions'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useStyles from 'substyle'

function AddItem({
  currentList,
  currentItemName,
  onAddListItem,
  onChange,
  selectSuggestionAsValue,
}) {
  const [showSuggestions, setShowSuggestions] = useState(false)

  const styles = useStyles(defaultStyle, {})
  return (
    <div {...styles}>
      <div {...styles('inputContainer')}>
        <Input
          onChange={(event) => {
            onChange(event)
            setShowSuggestions(true)
          }}
          onKeyDown={({ key }, value) => {
            if (key === 'Enter' && currentItemName) {
              onAddListItem(value)
            }
          }}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Produkt eingeben"
          style={styles('addItemInput')}
          value={currentItemName}
        />

        <IconButton disabled={!currentItemName} onClick={onAddListItem}>
          <FontAwesomeIcon icon={faPlus} />
        </IconButton>
      </div>
      {currentItemName && showSuggestions && (
        <Suggestions
          currentItemName={currentItemName}
          currentList={currentList}
          selectSuggestionAsValue={(suggestionName) => {
            selectSuggestionAsValue(suggestionName)
            setShowSuggestions(false)
          }}
        />
      )}
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  marginBottom: 20,
  flexDirection: 'column',

  addItemInput: {
    flexGrow: 1,
    marginRight: 5,
  },

  inputContainer: {
    display: 'flex',
    width: '100%',
  },
}

export default AddItem
