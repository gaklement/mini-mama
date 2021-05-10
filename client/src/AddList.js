import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

function AddList({ onCreateList }) {
  const [name, setName] = useState('')
  return (
    <div>
      <TextField
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
      <Button
        color="primary"
        variant="contained"
        disabled={!name}
        onClick={() => {
          onCreateList(name)
          setName('')
        }}
      >
        Erstellen
      </Button>
    </div>
  )
}

export default AddList
