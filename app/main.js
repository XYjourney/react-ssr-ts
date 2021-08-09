import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@/style/index.scss';
import logo from '@/static/color.png'
import Router from '@/router'
import { Provider } from 'react-redux'
import createStore from './redux/store/create'

const store = createStore();

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