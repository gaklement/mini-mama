import React from 'react'
import Lists from './Lists'
import useStyles from 'substyle'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListDetail from './ListDetail'
import CreateNewList from './CreateNewList'
import rooster from './logo-rooster.png'

function App() {
  const styles = useStyles(defaultStyle, {})

  return (
    <div {...styles}>
      <div {...styles('header')}>
        <img {...styles('logo')} src={rooster} alt="logo-rooster" />
        <div {...styles('name')}>I LIKE FOOD</div>
      </div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Lists} />
          <Route path="/create" exact component={CreateNewList} />
          <Route path="/listDetail/:listId" exact component={ListDetail} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const defaultStyle = {
  header: {
    display: 'flex',
    marginBottom: 50,
  },
  logo: {
    height: 60,
  },
  name: {
    fontSize: 20,
    margin: 'auto',
  },
}

export default App
