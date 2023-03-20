import {
  useEffect,
  useState,
  useRef,
  useCallback,
  SetStateAction,
} from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
import { useModel } from "./useModel";
import "./ObjectDetection.scss";
import { ImageUploadComponent } from "./ImageUploadComponent";
import { ImageDisplay } from "./ImageDisplay";
import { ResultsDisplay } from "./ResultsDisplay";
import { HistoryDisplay } from "./HistoryDisplay";

function App() {
  const [history, setHistory] = useState<string[]>([]);

  const imageRef = useRef<HTMLImageElement>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [results, setResults] = useState<Array<
    Awaited<ReturnType<ReturnType<typeof useModel>["classify"]>>
  > | null>(null);

  useEffect(() => {
    if (imageUrl != null) {
      setHistory((history) => {
        let index = history.indexOf(imageUrl);
        let arr = history;
        if (index !== -1) {
          arr = arr.splice(index, 1);
        }

        return [imageUrl, ...arr];
      });
    }
  }, [imageUrl]);

  const { isModelLoading, classify, isModelLoaded } = useModel();

  const identify = async () => {
    console.log("identifying1");
    if (imageRef.current != null) {
      console.log("identifying2");
      const results = await classify(imageRef.current as any);
      console.log(results);
      setResults((results || []) as any);
    }
  };
  const setImageURLCallback = useCallback(
    (url: string | null | undefined) => {
      setImageUrl(url || "");
      setResults([]);
    },
    [setImageUrl]
  );

  if (isModelLoading) {
    return <div>Loading model...</div>;
  }
  return (
    <div className="App">
      <h1 className="header">Image Identification</h1>
      <ImageUploadComponent
        setImageUrl={setImageURLCallback}
      ></ImageUploadComponent>
      <div className="mainWrapper">
        <div className="mainContent">
          <div className="imageHolder">
            <ImageDisplay
              imageRef={imageRef}
              imageUrl={imageUrl}
            ></ImageDisplay>
          </div>
          {(results?.length || 0) > 0 && (
            <div className="resultsHolder">
              <ResultsDisplay results={results} />
            </div>
          )}
        </div>
        {imageUrl && (
          <button className="button" onClick={identify}>
            Identify Image
          </button>
        )}
      </div>

      {history.length > 0 && (
        <div className="recentPredictions">
          <h2>Recent Images</h2>
          <div className="recentImages">
            <HistoryDisplay
              history={history}
              setImageUrl={setImageUrl}
            ></HistoryDisplay>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
