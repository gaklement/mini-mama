import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [fetchedListItems, setFetchedListItems] = useState([])

  const fetchListItems = useCallback(
    () =>
      axios
        .get(`/api/v1/listItems?listId=${match.params.listId}`)
        .then(({ data }) => setFetchedListItems(data.listItems)),
    [match.params.listId]
  )

  const onAddListItem = useCallback(() => {
    axios
      .put('/api/v1/lists', {
        id: match.params.listId,
        item: currentListItem,
      })
      .then(() => fetchListItems())

    setCurrentListItem('')
  }, [currentListItem, fetchListItems, match.params.listId])

  useEffect(() => fetchListItems(), [fetchListItems])

  return (
    <div>
      <button onClick={() => history.push('/')}>Zurück</button>
      <div>List Detail for {match.params.listId}</div>
      <input
        type="text"
        value={currentListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
        onKeyDown={({ key }) => key === 'Enter' && onAddListItem()}
      />
      <button disabled={!currentListItem} onClick={() => onAddListItem()}>
        Add item to list
      </button>

      {fetchedListItems.map((listItem) => (
        <div key={listItem.id}>{listItem.name}</div>
      ))}
    </div>
  )
}

export default ListDetail

// show list name in header
// add item actions rename, remove, tick off, maybe just remove on click
