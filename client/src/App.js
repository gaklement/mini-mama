import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Lists from './Lists'
import useStyles from 'substyle'
// import Datastore from 'nedb'

function App() {
  const [helloResponse, setHelloResponse] = useState({ response: '' })

  useEffect(() => {
    axios.get('/api/v1/say-something').then((res) => {
      const response = res.data
      setHelloResponse({
        response,
      })
    })
    console.log('==klement')

    // const database = new Datastore({ filename: 'database.db' })
    // database.loadDatabase()
  }, [])

  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <div {...styles('header')}>I LIKE FOOD - do you</div>
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
