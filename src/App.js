import React from 'react';
import Home from './components/views/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Route exact path='/' component={Home} />
    </MainLayout>
  </BrowserRouter>
);

export default App;
