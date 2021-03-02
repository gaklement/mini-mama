import React, { useState } from 'react'

function AddList({ onCreateList }) {
  const [name, setName] = useState()
  return (
    <div>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button
        disabled={!name}
        onClick={() => {
          onCreateList(name)
        }}
      >
        Add new list
      </button>
    </div>
  )
}

export default AddList
