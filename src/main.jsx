import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InitPage from './screens/initPage/index.jsx'
import Login from './screens/login/index.jsx'
import SignUp from './screens/createAccount/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InitPage />
  </StrictMode>,
)
