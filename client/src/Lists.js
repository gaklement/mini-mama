import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AddList from './AddList'

function Lists() {
  const [fetchedLists, setFetchedLists] = useState()

  useEffect(() => {
    axios.get('/api/v1/lists').then((fetchLists) => {
      setFetchedLists(fetchLists.data.lists)
    })
  }, [])

  function handleCreateList(name) {
    axios.post('/api/v1/lists', { name }).then(() => {
      console.log('==a new list was added')
    })
  }

  return (
    <div>
      <AddList onCreateList={(name) => handleCreateList(name)} />
      <p>Lists:</p>
      {fetchedLists &&
        fetchedLists.map((list) => <div key={list.id}>{list.name}</div>)}
    </div>
  )
}

export default Lists
