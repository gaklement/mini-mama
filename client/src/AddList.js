import React, { useState } from 'react'

function AddList({ onCreateList }) {
  const [name, setName] = useState('')
  return (
    <div>
      <input
        type="text"
        id="standard-basic"
        label="Name der Liste"
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
        color="primary"
        variant="contained"
        disabled={!name}
        onClick={() => {
          onCreateList(name)
          setName('')
        }}
      >
        Erstellen
      </button>
    </div>
  )
}

export default AddList
