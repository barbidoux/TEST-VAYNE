import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { SupabaseProvider } from './context/SupabaseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SupabaseProvider>
          <App />
        </SupabaseProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
