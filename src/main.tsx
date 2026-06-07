import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style.css'
import { App } from './ui/App'

const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.querySelector<HTMLDivElement>('#app')!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename || undefined}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

