import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { MoralisProvider } from 'react-moralis'

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider
      appId="2N15sTFwuFhgW9L5w3MNrcFw7EBAHfurPyzCzBUC"
      serverUrl="https://bwbcowrxh7rr.usemoralis.com:2053/server"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()