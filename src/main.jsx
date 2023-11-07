import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Card from './components/Card/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Card/:countryCode' element={<Card/>}/>
      <Route path='*' element={<h2>404 Page not found</h2>}/>

      
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
