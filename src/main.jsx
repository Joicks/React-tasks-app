import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskConextProvider} from './context/TaskContect.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskConextProvider>
    <App />
    </TaskConextProvider>
  </React.StrictMode>,
)
