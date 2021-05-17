import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import ListItem from './ListItem'
import Button from './Button'
import AddItem from './AddItem'
import useStyles from 'substyle'
import IconButton from './IconButton'
import ChangeListName from './ChangeListName'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [currentList, setCurrentList] = useState({})
  const [updatingListName, setUpdatingListName] = useState(false)
  const [newListName, setNewListName] = useState(currentList.name)
  const styles = useStyles(defaultStyle, {})

  const fetchList = useCallback(() => {
    axios
      .get(`/api/v1/list?listId=${match.params.listId}`)
      .then(({ data: list }) => setCurrentList(list))
  }, [match.params.listId])

  useEffect(() => fetchList(), [fetchList])
  useEffect(() => setNewListName(currentList.name), [currentList])

  const onAddListItem = useCallback(() => {
    axios
      .put('/api/v1/lists', {
        id: match.params.listId,
        item: currentListItem,
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

  const updateListName = useCallback(() => {
    setUpdatingListName(false)

    axios
      .put('/api/v1/list', {
        listId: match.params.listId,
        newName: newListName,
      })
      .then(() => fetchList(match.params.listId))
  }, [match.params.listId, fetchList, newListName])

  const openItems = currentList.items
    ? currentList.items.filter((item) => !item.done)
    : []

  const closedItems = currentList.items
    ? currentList.items.filter((item) => item.done)
    : []

  return (
    <div>
      {updatingListName ? (
        <div>
          <ChangeListName
            newListName={newListName}
            onChange={(event) => setNewListName(event.target.value)}
            updateListName={updateListName}
          />
          <Button
            onClick={() => setUpdatingListName(false)}
            secondary
            style={styles('cancelButton')}
          >
            Abbrechen
          </Button>
        </div>
      ) : (
        <div>
          <div {...styles('listTitle')}>
            {currentList.name}
            <IconButton
              onClick={() => {
                setUpdatingListName(true)
              }}
            >
              <FontAwesomeIcon icon={faPen} />
            </IconButton>
          </div>

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
      )}
    </div>
  )
}

const defaultStyle = {
  backButton: {
    position: 'absolute',
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
    marginBottom: 5,
  },
}

export default ListDetail
