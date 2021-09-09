// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import React from 'react';
// import ReactDom from 'react-dom';
import './App.css';

// const element = <h1>Vidly</h1>;
// React.render(element, document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Vidly</h1>
        </header>
        <main>
          <p className="App-intro">
            Some content
          </p>
        </main>
      </div>
    );
  }
}
export default App; 