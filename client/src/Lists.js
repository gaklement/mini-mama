import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from './Button'
import IconButton from './IconButton'
import useStyles from 'substyle'
import colors from './colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

function Lists({ history }) {
  const [fetchedLists, setFetchedLists] = useState([])
  const [editing, setEditing] = useState(false)
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
          <div {...styles('listContainer')}>
            <div
              {...styles('listTitle')}
              key={list.id}
              onClick={() => {
                history.push(`/listDetail/${list.id}`)
              }}
            >
              {list.name}
            </div>
            {editing && (
              <IconButton
                onClick={() => {
                  setEditing(false)
                  axios.delete(`/api/v1/list?listId=${list.id}`).then(() => {
                    fetchLists()
                  })
                }}
                style={styles('deleleList')}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </IconButton>
            )}
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
      <div {...styles('editButton')}>
        <Button
          onClick={() => {
            setEditing(true)
          }}
          secondary
        >
          Bearbeiten
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
  deleleList: {
    backgroundColor: colors.turquoise,
  },
  editButton: {
    bottom: 20,
    position: 'absolute',
    right: 0,
    marginRight: 8,
  },
  listsContainer: {
    marginBottom: 20,
    maxHeight: 310,
    overflowY: 'scroll',
  },
  listContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  listTitle: {
    backgroundColor: colors.darkBlue,
    borderRadius: 3,
    flexGrow: 1,
    fontSize: 20,
    marginBottom: 5,
    marginRight: 5,
    paddingBottom: 7,
    paddingLeft: 5,
    paddingTop: 7,
  },
  listsTitle: {
    fontSize: '24px',
    marginBottom: 20,
  },
}

export default Lists
