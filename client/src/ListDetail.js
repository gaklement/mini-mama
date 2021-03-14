import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import ListItem from './ListItem'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [currentList, setCurrentList] = useState({})

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

  return (
    <div>
      <button onClick={() => history.push('/')}>Zurück</button>
      <div>{`List Detail for "${currentList.name}"`}</div>
      <input
        type="text"
        value={currentListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
        onKeyDown={({ key }) => key === 'Enter' && onAddListItem()}
      />
      <button disabled={!currentListItem} onClick={() => onAddListItem()}>
        Add item to list
      </button>

      {currentList.items &&
        currentList.items.map((listItem) => (
          <ListItem
            key={listItem.id}
            listId={currentList.id}
            listItem={listItem}
            updateList={(listId) => fetchList()}
          />
        ))}
    </div>
  )
}

export default ListDetail
