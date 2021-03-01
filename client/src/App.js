import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lists from './Lists'
import useStyles from 'substyle'

function App() {
  // useEffect(() => {
  //   axios.get('/api/v1/say-something').then((res) => {
  //     // handle response
  //   })
  // }, [])

  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <div {...styles('header')}>I LIKE FOOD</div>
      <Lists />
    </div>
  )
}

const defaultStyle = {
  header: {
    borderBottom: '1px solid grey',
    fontSize: 24,
    margin: 'auto',
    textAlign: 'center',
    width: '70%',
  },
}

export default App
