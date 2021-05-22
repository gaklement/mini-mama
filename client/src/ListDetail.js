import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import AddItem from './AddItem'
import useStyles from 'substyle'
import IconButton from './IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [currentList, setCurrentList] = useState({})
  const styles = useStyles(defaultStyle, {})

  const fetchList = useCallback(() => {
    axios
      .get(`/api/v1/list?listId=${match.params.listId}`)
      .then(({ data: list }) => setCurrentList(list))
  }, [match.params.listId])

  useEffect(() => fetchList(), [fetchList])

  const onAddListItem = useCallback(() => {
    const capitalizedListItem = `${currentListItem
      .charAt(0)
      .toUpperCase()}${currentListItem.slice(1)}`

    axios
      .put('/api/v1/lists', {
        id: match.params.listId,
        item: capitalizedListItem,
      })
      .then(() => fetchList())

    setCurrentListItem('')
  }, [currentListItem, fetchList, match.params.listId])

  const toggleItem = useCallback(
    (listItem) => {
      axios
        .put('/api/v1/item', {
          itemId: listItem.id,
          listId: match.params.listId,
        })
        .then(() => fetchList(match.params.listId))
    },
    [fetchList, match.params.listId]
  )

  const openItems = currentList.items
    ? currentList.items.filter((item) => !item.done)
    : []

  const closedItems = currentList.items
    ? currentList.items.filter((item) => item.done)
    : []

  return (
    <div>
      <div {...styles('listTitle')}>{currentList.name}</div>
      <AddItem
        currentListItem={currentListItem}
        onAddListItem={onAddListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
      />

      {openItems.map((item) => (
        <ListItem
          key={item.id}
          listId={currentList.id}
          listItem={item}
          onClick={toggleItem}
        />
      ))}

      {closedItems.length > 0 && (
        <div>
          <p>Closed</p>
          {closedItems.map((item) => (
            <ListItem
              key={item.id}
              listId={currentList.id}
              listItem={item}
              onClick={toggleItem}
            />
          ))}
        </div>
      )}
      <IconButton
        onClick={() => history.push('/')}
        secondary
        style={styles('backButton')}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </IconButton>
    </div>
  )
}

const defaultStyle = {
  backButton: {
    position: 'fixed',
    bottom: 20,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
  },
  listTitle: {
    display: 'flex',
    fontSize: 20,
    justifyContent: 'space-between',
    marginBottom: 15,
  },
}

export default ListDetail
