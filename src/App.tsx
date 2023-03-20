import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import pack from "../package.json";
import { DemoPage } from "./DemoPage";

const homepage = pack.homepage || "";
const url = new URL(homepage);
const baseURLPath = url?.pathname || "";

function App() {
  return (
    <div className="App">
      <Router basename={baseURLPath}>
        <Routes>
          <Route path="/demo" element={<DemoPage></DemoPage>} />
          <Route path="/" element={<Navigate to="/demo" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
