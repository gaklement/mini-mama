import React, { useState } from 'react'

function ListDetail({ history, match }) {
  const [listItem, setListItem] = useState('')

  return (
    <div>
      <button onClick={() => history.push('/')}>Zurück</button>
      <div>ListDetail for {match.params.listId}</div>
      <input
        type="text"
        value={listItem}
        onChange={(event) => setListItem(event.target.value)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            console.log('nein', listItem)
            setListItem('')
          }
        }}
      />
      <button
        onClick={() => {
          console.log('ja', listItem)
          setListItem('')
        }}
      >
        Add item to list
      </button>
    </div>
  )
}

export default ListDetail
