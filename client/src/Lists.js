import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddList from './AddList'
import { List, ListItem, ListItemText } from '@material-ui/core'

function Lists({ history }) {
  const [fetchedLists, setFetchedLists] = useState([])

  useEffect(() => {
    fetchLists()
  }, [])

  function fetchLists() {
    axios.get('/api/v1/lists').then(({ data }) => {
      setFetchedLists(data.lists)
    })
  }

  function handleCreateList(name) {
    axios.post('/api/v1/lists', { name }).then(() => fetchLists())
  }

  return (
    <div>
      <AddList onCreateList={(name) => handleCreateList(name)} />
      <p>Lists:</p>
      <List dense={true}>
        {fetchedLists.map((list) => (
          <ListItem key={list.id}>
            <ListItemText
              primary={list.name}
              secondary={list.id}
              onClick={() => {
                history.push(`/listDetail/${list.id}`)
              }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default Lists
