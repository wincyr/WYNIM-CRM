import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../css/app.css'
import './bootstrap.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
