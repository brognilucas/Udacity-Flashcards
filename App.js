import React from 'react';
import Stack from './routes'
import { createStore } from 'redux'
import reducers from './redux/reducers'
import middleware from './redux/middleware';
import { Provider } from 'react-redux'
import { setLocalNotification } from './utils'

const store = createStore(reducers, middleware)

export default class App extends React.Component {

  componentDidMount(){
    setLocalNotification()
  }
  
  render() {
    return (
      <Provider store={store} >
        <Stack />
      </Provider>
    );
  }
}
