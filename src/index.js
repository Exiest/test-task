import React from 'react'
import { render } from 'react-dom'
import Game from './components/Game'
import ReactModal from 'react-modal'
import StartModal from './components/StartModal'
import AlertModal from './components/AlertModal'
import { Provider } from 'react-redux'
import store from './store'

import './global/styles.css'

ReactModal.setAppElement('#root');

render(
  <Provider store={store}>
    <Game />
    <StartModal />
    <AlertModal />
  </Provider>,
  document.getElementById('root')
);
