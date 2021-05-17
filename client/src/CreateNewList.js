import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button'

function CreateNewList({ history }) {
  const [name, setName] = useState('')

  function onCreateList(name) {
    axios.post('/api/v1/lists', { name }).then(({ data }) => {
      setName('')
      history.push(`/listDetail/${data.listId}`)
    })
  }

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
          }
        }}
        value={name}
      />
      <Button
        onClick={() => onCreateList(name)}
        disabled={!name}
        label="Fertig"
      />
    </div>
  )
}

export default CreateNewList
