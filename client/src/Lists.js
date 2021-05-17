import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'
import useStyles from 'substyle'
import colors from './colors'

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
      <div {...styles('listsTitle')}>Meine Listen</div>
      <div {...styles('listsContainer')}>
        {fetchedLists.map((list) => (
          <div
            {...styles('list')}
            key={list.id}
            onClick={() => {
              history.push(`/listDetail/${list.id}`)
            }}
          >
            {list.name}
          </div>
        ))}
      </div>

      <div {...styles('createListButton')}>
        <Button
          onClick={() => {
            history.push('/create')
          }}
        >
          Neue Liste
        </Button>
      </div>
    </div>
  )
}

const defaultStyle = {
  createListButton: {
    bottom: 20,
    position: 'absolute',
  },
  list: {
    backgroundColor: colors.darkBlue,
    fontSize: 20,
    marginBottom: 5,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingTop: 10,
  },
  listsContainer: {
    maxHeight: 310,
    overflowY: 'scroll',
  },
  listsTitle: {
    fontSize: '24px',
    marginBottom: 20,
  },
}

export default Lists
