import React, {Component} from 'react'
import './App.css'

import {Provider} from 'react-redux'
import store from './store'
import Count from './components/Count'
import Control from './components/Control'

class App extends Component {
  render() {

    // const reducer = (state={}, action) => {\
    //   if(action.type === 'A') {
    //     return {
    //       ...state,
    //       A: 'Im A'
    //     }
    //   }
    //   if(action.type === 'B') {
    //     return {
    //       ...state,
    //       B: 'Im B'
    //     }
    //   }

    //   return state
    // }
    // const store = createStore(reducer)

    // store.subscribe(() => {
    //   console.log(store.getState().A)
    // })
    // store.subscribe(() => {
    //   console.log(store.getState().B)
    // })

    // store.dispatch({type: 'A'})
    // store.dispatch({type: 'Something'})
    // store.dispatch({type: 'B'})
    // store.dispatch({type: 'Something'})



    return(
      <Provider store= {store}>
        <div className="App">
          <h1>Redux World</h1>
          <Count/>
          <Control/>
        </div>
      </Provider>
    );
  }
}
export default App