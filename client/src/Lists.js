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

  return (
    <div>
      <AddList />
      <p>Lists:</p>
      {fetchedLists &&
        fetchedLists.map((list) => <div key={list.name}>{list.name}</div>)}
    </div>
  )
}

export default Lists
