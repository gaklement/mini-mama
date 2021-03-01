import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Lists() {
  const [fetchedLists, setFetchedLists] = useState()
  useEffect(() => {
    axios.get('/api/v1/lists').then((fetchLists) => {
      setFetchedLists(fetchLists.data)
    })
  }, [])
  console.log('==fetchedLists, ', fetchedLists)

  return <div>Lists</div>
}

export default Lists
