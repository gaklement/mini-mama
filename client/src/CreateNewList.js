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
        <Button
          onClick={() => history.push('/')}
          secondary
          style={styles('cancel')}
        >
          Abbrechen
        </Button>
        <Button
          onClick={() => onCreateList(name)}
          disabled={!name}
          style={styles('confirm')}
        >
          Fertig
        </Button>
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
    marginTop: 5,
  },
  cancel: {
    marginRight: 5,
    width: '50%',
  },
  confirm: {
    width: '50%',
  },
}

export default CreateNewList
