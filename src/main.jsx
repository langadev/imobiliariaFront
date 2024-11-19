import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RouteComponent from './routes/RouteComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
  <RouteComponent>
    <App />
  </RouteComponent>
      
   
    
  </React.StrictMode>,
)
