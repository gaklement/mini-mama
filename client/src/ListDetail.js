import React, { useState } from 'react'
import axios from 'axios'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')

  function fetchListItems() {
    axios
      .get(`/api/v1/listItems?listId=${match.params.listId}`)
      .then(({ data }) => {
        console.log('==listItems', data.listItems)
      })
  }

  function onAddListItem() {
    axios
      .put('/api/v1/lists', {
        id: match.params.listId,
        item: currentListItem,
      })
      .then(() => fetchListItems())

    setCurrentListItem('')
  }

  return (
    <div>
      <button onClick={() => history.push('/')}>Zurück</button>
      <div>ListDetail for {match.params.listId}</div>
      <input
        type="text"
        value={currentListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
        onKeyDown={({ key }) => key === 'Enter' && onAddListItem()}
      />
      <button onClick={() => onAddListItem()}>Add item to list</button>
      <button onClick={() => fetchListItems()}>fetch</button>
    </div>
  )
}

export default ListDetail
