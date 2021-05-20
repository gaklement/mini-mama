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
  const [confirmDeleteList, setConfirmDeleteList] = useState(false)
  const [requestDeleteForList, setRequestDeleteForList] = useState({})
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
          <div {...styles('listContainer')} key={list.id}>
            <div
              {...styles('listTitle')}
              onClick={() => {
                history.push(`/listDetail/${list.id}`)
              }}
            >
              {list.name}
            </div>
            {editing && (
              <IconButton
                onClick={() => {
                  setRequestDeleteForList(list)
                  setConfirmDeleteList(true)
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
        {editing ? (
          <Button
            onClick={() => {
              setEditing(false)
            }}
            secondary
          >
            Abbrechen
          </Button>
        ) : (
          <Button
            onClick={() => {
              setEditing(true)
            }}
            secondary
          >
            Bearbeiten
          </Button>
        )}
      </div>
      {confirmDeleteList && (
        <div {...styles('confirmDeleteModal')}>
          <div {...styles('confirmDeleteHint')}>
            {`Soll die Liste "${requestDeleteForList.name}" wirklich gelöscht werden?`}
          </div>
          <div {...styles('modalActionsContainer')}>
            <Button
              secondary
              onClick={() => {
                setRequestDeleteForList({})
                setConfirmDeleteList(false)
              }}
            >
              Abbrechen
            </Button>
            <Button
              onClick={() => {
                setEditing(false)
                axios
                  .delete(`/api/v1/list?listId=${requestDeleteForList.id}`)
                  .then(() => {
                    fetchLists()
                    setRequestDeleteForList({})
                    setConfirmDeleteList(false)
                  })
              }}
            >
              Bestätigen
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

const height = 20
const width = 90

const defaultStyle = {
  confirmDeleteHint: {
    color: colors.darkGrey,
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  confirmDeleteModal: {
    backgroundColor: 'white',
    borderRadius: 3,
    bottom: `${(100 - height) / 2}%`,
    height: `${height}%`,
    justifyContent: 'center',
    opacity: '90%',
    position: 'absolute',
    right: `${(100 - width) / 2}%`,
    width: `${90}%`,
  },
  createListButton: {
    bottom: 20,
    position: 'absolute',
  },
  deleleList: {
    backgroundColor: colors.turquoise,
    minHeight: 38,
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
  modalActionsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
}

export default Lists
