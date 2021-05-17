import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import Input from './Input'

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
      <Input
        onChange={(event) => setName(event.target.value)}
        onKeyDown={({ key }) => {
          if (key === 'Enter') {
            onCreateList(name)
          }
        }}
        placeholder="Name der Liste"
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
