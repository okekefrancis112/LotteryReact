import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './store.json';
// import { Fragment } from 'react';

const storeUrl = "https://fakestoreapi.com/products"

function App() {

  return (
    <Fragment>
      <p> Store data</p>
      {
        Data.map((item, index) => (
          <Fragment key={index}>

            <p> {item.title} </p>

          </Fragment>
        ))
      };
     
    </Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
