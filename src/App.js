import React from 'react';
import { GlobalStyle } from './style.js';
import { IconFontGlobalStyle } from './statics/iconfont/iconfont.js'
import Header from './common/header';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconFontGlobalStyle />
      <Header></Header>
      hello world
    </div>
  );
}

export default App;
