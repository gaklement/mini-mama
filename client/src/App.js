import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lists from './Lists'
import useStyles from 'substyle'

function App() {
  const [helloResponse, setHelloResponse] = useState({ response: '' })

  useEffect(() => {
    console.log('==Ichanged')

    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data
      setHelloResponse({
        response,
      })
    })
  }, [])

  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <div {...styles('header')}>I LIKE FOOD</div>
      <Lists />
      <h1>{helloResponse.response.body}</h1>
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
