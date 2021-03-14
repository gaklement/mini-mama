import React, { useCallback } from 'react'
import useStyles from 'substyle'
import axios from 'axios'

function ListItem({ listId, listItem, updateList }) {
  const styles = useStyles(defaultStyle, {})

  const markItemAsDone = useCallback(() => {
    axios
      .put('/api/v1/item', { itemId: listItem.id, listId })
      .then(() => updateList(listId))
  }, [listId, listItem.id, updateList])

  return (
    <div
      {...styles}
      onClick={() => {
        markItemAsDone()
      }}
    >
      {listItem.name}
      {listItem.done && <span {...styles('done')}>Done</span>}
    </div>
  )
}

const defaultStyle = {
  borderBottom: '1px solid white',
  marginBottom: 1,

  done: {
    float: 'right',
  },
}

export default ListItem
