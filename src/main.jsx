import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import ShopContextProvider from './Context/Shopcontext'
import './index.css'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>

    <App />
  </ShopContextProvider>
  </BrowserRouter>,
)
