import React from 'react'
import useStyles from 'substyle'
import IconButton from './IconButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

function ListItem({ listItem, onClick }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles} onClick={() => onClick(listItem)}>
      {listItem.name}
      {listItem.done && (
        <IconButton small>
          <FontAwesomeIcon icon={faRedo} />
        </IconButton>
      )}
    </div>
  )
}

const defaultStyle = {
  borderBottom: '1px solid white',
  display: 'flex',
  fontSize: 18,
  justifyContent: 'space-between',
  marginBottom: 10,
  paddingBottom: 5,
}

export default ListItem
