import React from 'react'
import useStyles from 'substyle'

function ListItem({ listItem, onClick }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles} onClick={() => onClick(listItem)}>
      {listItem.name}
      {listItem.done && <span {...styles('done')}>Done</span>}
    </div>
  )
}

const defaultStyle = {
  borderBottom: '1px solid white',
  fontSize: 18,
  marginBottom: 10,
  paddingBottom: 5,
  done: {
    float: 'right',
  },
}

export default ListItem
