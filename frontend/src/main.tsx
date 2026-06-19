import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { App } from './App'
import { LOCAL_GAME_BACKGROUND } from './assetsConfig'

document.documentElement.style.setProperty('--game-bg-image', `url("${LOCAL_GAME_BACKGROUND}")`)

createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
