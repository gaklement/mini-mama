import { faRedo, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from './IconButton'
import React from 'react'
import colors from './colors'
import useStyles from 'substyle'

function ListItem({ listId, listItem, onDeleteItem, onToggleItem }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles} onClick={() => onToggleItem(listItem)}>
      {listItem.name}
      {listItem.done && (
        <div {...styles('buttonContainer')}>
          <IconButton {...styles('deleteItem')} onClick={onDeleteItem} small>
            <FontAwesomeIcon icon={faTrashAlt} />
          </IconButton>
          <IconButton small>
            <FontAwesomeIcon icon={faRedo} />
          </IconButton>
        </div>
      )}
    </div>
  )
}

const defaultStyle = {
  borderBottom: '1px solid white',
  display: 'flex',
  fontSize: 18,
  justifyContent: 'space-between',
  marginBottom: 10,
  paddingBottom: 5,

  buttonContainer: {
    display: 'flex',
  },

  deleteItem: {
    backgroundColor: colors.turquoise,
    marginRight: 5,
  },
}

export default ListItem
