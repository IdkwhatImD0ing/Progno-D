import logo from './logo.svg';
import React from 'react';
import Landing from './Landing';
import Select from './Select';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/select" element={<Select />} />
          {/*<Route path="/predict:condition" element={<Predict />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}
