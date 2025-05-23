import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import "./App.css"
import { App } from './App.jsx'
import { AuthProvider } from './Store/Auth.jsx'
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"

      />
    </AuthProvider>
  </StrictMode>,
)
