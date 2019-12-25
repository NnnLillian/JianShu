import React from 'react';
import { GlobalStyle } from './style.js';
import { IconFontGlobalStyle } from './statics/iconfont/iconfont.js'
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <IconFontGlobalStyle />
        <BrowserRouter>
          <Header></Header>
          <div>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
