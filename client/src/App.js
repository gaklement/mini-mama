import React from 'react'
import Lists from './Lists'
import useStyles from 'substyle'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <BrowserRouter>
        <div {...styles('header')}>I LIKE FOOD</div>
        <Route path="/" exact component={Lists} />
      </BrowserRouter>
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
