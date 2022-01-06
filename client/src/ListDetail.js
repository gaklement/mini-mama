import React, { useCallback, useEffect, useState } from 'react'
import { faArrowLeft, faCheck, faRedo } from '@fortawesome/free-solid-svg-icons'

import AddItem from './AddItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from './IconButton'
import ListItem from './ListItem'
import axios from 'axios'
import colors from './colors'
import useStyles from 'substyle'

function ListDetail({ history, match }) {
  const [currentListItem, setCurrentListItem] = useState('')
  const [currentList, setCurrentList] = useState({})
  const [showOldItems, setShowOldItems] = useState(false)
  const styles = useStyles(defaultStyle, {})

  const fetchList = useCallback(() => {
    axios
      .get(`/api/v1/list?listId=${match.params.listId}`)
      .then(({ data: list }) => setCurrentList(list))
  }, [match.params.listId])

  useEffect(() => fetchList(), [fetchList])

  const onAddListItem = useCallback(() => {
    const capitalizedListItem = `${currentListItem
      .charAt(0)
      .toUpperCase()}${currentListItem.slice(1)}`

    axios
      .put('/api/v1/lists', {
        id: match.params.listId,
        item: capitalizedListItem,
      })
      .then(() => fetchList())

    setCurrentListItem('')
  }, [currentListItem, fetchList, match.params.listId])

  const toggleItem = useCallback(
    (listItem) => {
      axios
        .put('/api/v1/item', {
          itemId: listItem.id,
          listId: match.params.listId,
        })
        .then(() => fetchList(match.params.listId))
    },
    [fetchList, match.params.listId]
  )

  const openItems = currentList.items
    ? currentList.items.filter((item) => !item.done)
    : []

  const closedItems = currentList.items
    ? currentList.items.filter((item) => item.done)
    : []

  return (
    <div>
      <div {...styles('title')}>{currentList.name}</div>
      <AddItem
        currentListItem={currentListItem}
        onAddListItem={onAddListItem}
        onChange={(event) => setCurrentListItem(event.target.value)}
        currentList={currentList}
      />
      {openItems.length > 0 && (
        <div {...styles('listItemContainer')}>
          {openItems.map((item) => (
            <ListItem
              key={item.id}
              listId={currentList.id}
              listItem={item}
              onToggleItem={toggleItem}
            />
          ))}
        </div>
      )}
      {showOldItems && closedItems.length > 0 && (
        <div {...styles('oldSection')}>
          <div {...styles('title')}>Erledigt</div>
          <div {...styles('oldListItemContainer')}>
            {closedItems
              .sort((first, second) => (first.name > second.name ? 1 : -1))
              .map((item) => (
                <ListItem
                  key={item.id}
                  listId={currentList.id}
                  listItem={item}
                  onToggleItem={(listItem) => {
                    // toggling the last item will make the list empty
                    if (closedItems.length === 1) {
                      setShowOldItems(false)
                    }
                    toggleItem(listItem)
                  }}
                  onDeleteItem={(event) => {
                    axios
                      .delete(
                        `/api/v1/item?id=${item.id}&listId=${currentList.id}`
                      )
                      .then(() => {
                        fetchList()
                      })

                    event.stopPropagation()
                  }}
                />
              ))}
          </div>
        </div>
      )}
      <div {...styles('actions')}>
        <IconButton
          onClick={() => history.push('/')}
          secondary
          style={styles('backButton')}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </IconButton>
        {closedItems.length > 0 && (
          <IconButton
            onClick={() => {
              setShowOldItems(!showOldItems)
            }}
            secondary={!showOldItems}
          >
            <FontAwesomeIcon icon={showOldItems ? faCheck : faRedo} />
          </IconButton>
        )}
      </div>
    </div>
  )
}

const listItemContainer = {
  backgroundColor: colors.jiggaBlueLight,
  borderRadius: 3,
  marginBottom: 10,
  maxHeight: 310,
  overflowY: 'scroll',
  paddingLeft: 5,
  paddingRight: 5,
  paddingTop: 10,
  paddingBottom: 10,
}

const defaultStyle = {
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  backButton: {
    bottom: 20,
  },
  cancelButton: {
    position: 'absolute',
    bottom: 20,
  },
  listItemContainer,
  oldListItemContainer: {
    ...listItemContainer,
    backgroundColor: colors.purple,
  },
  oldSection: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
}

export default ListDetail
