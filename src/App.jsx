import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageOne from './pageRoute/PageOne';
import PageTwo from './pageRoute/PageTwo';
import PageNotFoumd from './pageRoute/PageNotFoumd';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageOne/>}/>
        <Route path='/two' element={<PageTwo/>}/>
        <Route path='/*' element={<PageNotFoumd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;