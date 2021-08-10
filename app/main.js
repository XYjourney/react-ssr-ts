import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@/style/index.scss';
import Router from '@/router'
import { Provider } from 'react-redux'
import createStore from './redux/store/create.js'
import "./style/index.scss"
const defaultStore = window.__STORE__ || {}
const store = createStore(defaultStore);
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  )
}

render(<App/>, document.getElementById('app'));