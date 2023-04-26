import {  } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css'

import SignIn from './assets/Components/SignIn/SignIn'
import PageNotFound from './assets/Components/PageNotFound/PageNotFound'
import Patient from './assets/Components/Patient/Patient';
import Reporter from './assets/Components/Reporter/Reporter';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Patient" element={<Patient />} />
        <Route path="/Reporter" element={<Reporter />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
