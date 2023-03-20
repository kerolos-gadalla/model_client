import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import pack from '../package.json'

const homepage = pack.homepage || ''
const url = new URL(homepage)
let baseURLPath = url.pathname;

function App() {
  return (
    <div className="App">
      <Router basename={baseURLPath}>
        <Routes>
          <Route
            path="/demo"
            element={
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Navigate to="/demo" />
                {console.log("Hello world")}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
