import React from 'react';
import { GlobalStyle } from './style.js';
import { IconFontGlobalStyle } from './statics/iconfont/iconfont.js'
import { Provider } from 'react-redux';
import Header from './common/header';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <IconFontGlobalStyle />
      <Header></Header>
      hello world
    </Provider>
  );
}

export default App;
