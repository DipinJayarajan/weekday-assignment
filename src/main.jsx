import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { AppStateProvider } from './ContextApi/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AppStateProvider>

    <App />
  </AppStateProvider>,
  {/* </React.StrictMode>, */}
)
