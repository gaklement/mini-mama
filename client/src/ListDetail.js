import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [currentList, setCurrentList] = useState({})
  const [updatingListName, setUpdatingListName] = useState(false)
  const [newListName, setNewListName] = useState('')

  const fetchList = useCallback(() => {
    axios
      .get(`/api/v1/list?listId=${match.params.listId}`)
      .then(({ data: list }) => setCurrentList(list))
  }, [match.params.listId])

  useEffect(() => fetchList(), [fetchList])

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
      <button onClick={() => history.push('/')}>Zurück</button>
      <div>
        {updatingListName ? (
          <div>
            <input
              type="text"
              onChange={(event) => {
                setNewListName(event.target.value)
              }}
              onKeyDown={({ key }) => {
                if (key === 'Enter') {
                  setUpdatingListName(false)
                  updateListName(newListName)
                }
              }}
            />
            <button
              onClick={() => {
                setUpdatingListName(false)
                updateListName(newListName)
              }}
            >
              Confirm
            </button>
          </div>
        ) : (
          <div>
            {`List Detail for "${currentList.name}"`}
            <button
              onClick={() => {
                setUpdatingListName(true)
              }}
            >
              Change name
            </button>
          </div>
        )}
      </div>
      <input
        type="text"
        value={currentListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
        onKeyDown={({ key }) => key === 'Enter' && onAddListItem()}
      />
      <button disabled={!currentListItem} onClick={() => onAddListItem()}>
        Add item to list
      </button>

      {openItems.map((item) => (
        <ListItem
          key={item.id}
          listId={currentList.id}
          listItem={item}
          onClick={toggleItem}
        />
      ))}

      {closedItems && (
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
    </div>
  )
}

export default ListDetail
