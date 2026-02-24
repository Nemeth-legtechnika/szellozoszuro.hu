import './index.css'
import './i18n'

import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'

const rootElement = document.getElementById('root') ?? document.createElement('div')
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
