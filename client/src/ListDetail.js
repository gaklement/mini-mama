import React from 'react'

function ListDetail({ history, match }) {
  return (
    <div>
      <button
        onClick={() => {
          history.push('/')
        }}
      >
        Zurück
      </button>
      <div>ListDetail for {match.params.listId}</div>
    </div>
  )
}

export default ListDetail
