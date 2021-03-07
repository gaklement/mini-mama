import React from 'react'
import Lists from './Lists'
import useStyles from 'substyle'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListDetail from './ListDetail'

function App() {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <div {...styles('header')}>I LIKE FOOD</div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Lists} />
          <Route path="/listDetail/:listId" exact component={ListDetail} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
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
