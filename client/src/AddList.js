import React from 'react'
import useStyles from 'substyle'

function AddList({ history }) {
  const styles = useStyles(defaultStyle, {})

  return (
    <button
      {...styles}
      color="primary"
      variant="contained"
      onClick={() => {
        history.push('/create')
      }}
    >
      Neue Liste
    </button>
  )
}

const defaultStyle = {
  position: 'absolute',
  bottom: '20px',
}

export default AddList
