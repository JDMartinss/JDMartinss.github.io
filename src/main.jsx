// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ADICIONE ESTA LINHA EXATAMENTE AQUI:
import './styles/global.css' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)