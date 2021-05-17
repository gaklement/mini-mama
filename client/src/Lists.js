import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'
import useStyles from 'substyle'

function Lists({ history }) {
  const [fetchedLists, setFetchedLists] = useState([])
  const styles = useStyles(defaultStyle, {})

  useEffect(() => {
    fetchLists()
  }, [])

  function fetchLists() {
    axios.get('/api/v1/lists').then(({ data }) => {
      setFetchedLists(data.lists)
    })
  }

  return (
    <div>
      <p {...styles('listsTitle')}>Meine Listen</p>
      {fetchedLists.map((list) => (
        <div
          key={list.id}
          onClick={() => {
            history.push(`/listDetail/${list.id}`)
          }}
        >
          {list.name}
        </div>
      ))}

      <div {...styles('createListButton')}>
        <Button
          onClick={() => {
            history.push('/create')
          }}
          label="Neue Liste"
        />
      </div>
    </div>
  )
}

const defaultStyle = {
  listsTitle: {
    fontSize: '20px',
  },
  createListButton: {
    bottom: 20,
    position: 'absolute',
  },
}

export default Lists
