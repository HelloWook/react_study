import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route, NavLink,  } from 'react-router-dom';
function Home ()
{
  return <div>
    <h2>HOME</h2>
    home...
  </div>
}
function Topics ()
{
  return <div>
    <h2>Topics</h2>
    Topics...
  </div>
}
function Contact ()
{
  return <div>
    <h2>Contact</h2>
    Contact...
  </div>
}

function App()
{
  return <div>
  <h1>Hello React Router Dom </h1>
  <ul>
  <li><NavLink to ='/'>Home</NavLink></li>
  <li><NavLink to ='/topics'>Topics</NavLink></li>
  <li><NavLink to ='/contact'>Contact</NavLink></li>
  </ul>
  <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/topics" element={<Topics />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  </Routes>
  </div>
}
ReactDOM.render(
  <React.StrictMode>
     <HashRouter> 
    <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();