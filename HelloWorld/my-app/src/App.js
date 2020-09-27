import React from 'react';
import './App.css';
import HelloWorld from './HelloWorld'
import { createStore } from 'redux'
import UserCard from './UserCard';
import UserCardRedux from './UserCardRedux';
import reducer from './reducers'

const initialState = { tech: "React " };
const store = createStore(reducer, initialState)

class App extends React.Component {

  render() {
    // return  />;
    return (<><HelloWorld tech={store.getState().tech}></HelloWorld><UserCardRedux></UserCardRedux></>)
  }
}

export default App;
