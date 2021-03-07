import React, { useState } from 'react'

function AddList({ onCreateList }) {
  const [name, setName] = useState('')
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            onCreateList(name)
            setName('')
          }
        }}
        value={name}
      />
      <button
        disabled={!name}
        onClick={() => {
          onCreateList(name)
          setName('')
        }}
      >
        Add new list
      </button>
    </div>
  )
}

export default AddList
