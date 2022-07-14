import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import crypto from './store/CryptoStore'
import './styles/index.scss'

export const Context = React.createContext({crypto})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Context.Provider value={{crypto}} >
      <App />
    </Context.Provider>
  </React.StrictMode>
)
