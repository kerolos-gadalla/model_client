import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import pack from "../package.json";
import { DemoPage } from "./pages/DemoPage";
import ObjectDetection from "./pages/ObjectDetection";
import { getDemoPath, getPlaygroundPath, getTesseractPath } from "./utils/pathUtils";
import { BasicExample } from "./BasicExample";
import { TesseractModel } from "./pages/ObjectDetection/TesseractModel";

const homepage = pack.homepage || "";
const url = new URL(homepage);
const baseURLPath = url?.pathname || "";

const DEMO_PATH = getDemoPath();
const PLAYGROUND_PATH = getPlaygroundPath();
const TESSERACT_PATH = getTesseractPath();

const ROOT_REDIRECTION_PATH = PLAYGROUND_PATH;

function App() {
  return (
    <div className="App">
      <BasicExample baseURLPath={baseURLPath}  />
      <Router basename={baseURLPath}>
        <Routes>
          <Route path={DEMO_PATH} element={<DemoPage></DemoPage>} />
          <Route path="/" element={<Navigate to={ROOT_REDIRECTION_PATH} />} />
          <Route path={PLAYGROUND_PATH} element={<ObjectDetection />} />
          <Route path={TESSERACT_PATH} element={<TesseractModel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
