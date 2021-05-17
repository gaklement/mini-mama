import React, { useState } from 'react'
import axios from 'axios'
import Button from './Button'
import Input from './Input'
import useStyles from 'substyle'

function CreateNewList({ history }) {
  const [name, setName] = useState('')
  const styles = useStyles(defaultStyle, {})

  function onCreateList(name) {
    axios.post('/api/v1/lists', { name }).then(({ data }) => {
      setName('')
      history.push(`/listDetail/${data.listId}`)
    })
  }

  return (
    <div {...styles}>
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
      <div {...styles('actions')}>
        <Button label="Abbrechen" onClick={() => history.push('/')} secondary />
        <Button
          onClick={() => onCreateList(name)}
          disabled={!name}
          label="Fertig"
        />
      </div>
    </div>
  )
}

const defaultStyle = {
  display: 'flex',
  flexDirection: 'column',
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}

export default CreateNewList
