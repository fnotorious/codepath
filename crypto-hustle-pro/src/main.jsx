import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from './routes/NotFound.jsx';
import Layout from './routes/Layout';
import DetailView from './routes/DetailView';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<App />} />
        </Route>
        <Route path='/coinDetails/:symbol' element={<DetailView />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
