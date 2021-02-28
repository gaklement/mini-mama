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
      <h1>Hello from the frontend! Gisa</h1>
      <Lists />
      <h1>{helloResponse.response.body}</h1>
    </div>
  )
}

const defaultStyle = {}

export default App
