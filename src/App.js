import React, {Component} from 'react'
import './App.css'
import { createStore } from 'redux'

class App extends Component {
  render() {

    const reducer = (state={}, action) => {

      if(action.type === 'A') {
        return {
          ...state,
          A: 'Im A'
        }
      }
      if(action.type === 'B') {
        return {
          ...state,
          B: 'Im B'
        }
      }

      return state
    }
    const store = createStore(reducer)

    store.subscribe(() => {
      console.log(store.getState().A)
    })
    store.subscribe(() => {
      console.log(store.getState().B)
    })

    store.dispatch({type: 'A'})
    store.dispatch({type: 'Something'})
    store.dispatch({type: 'B'})
    store.dispatch({type: 'Something'})



    return(
      <div className="App">
        <h1>Redux World</h1>
      </div>
    );
  }
}
export default App