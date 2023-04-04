import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
function Home()
  {
    return <div>
      <h2>HOME</h2>
      Home...
    </div>
  }
  function Topics()
  {
    return <div>
      <h2>Topics</h2>
      Topics...
    </div>
  }
  function Contact()
  {
    return <div>
      <h2>Contact</h2>
      Contact...
    </div>
  }
function App()
  {
    return( <div>
        <h1>Hello React DOM</h1>
   
    <Route path=''><Home></Home></Route>
    <Route path="/topics" ><Topics></Topics></Route>
    <Route path="/contact"><Contact></Contact></Route>
    </div>
  
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
