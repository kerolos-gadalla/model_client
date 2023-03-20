import { useEffect, useState, useCallback } from "react";
import "@tensorflow/tfjs-backend-webgl";

import * as mobilenet from "@tensorflow-models/mobilenet";

export function useModel(modelName = "mobilenet") {
  const [model, setModel] = useState<mobilenet.MobileNet | null>(null);
  const [isModelLoading, setIsModelLoading] = useState(false);

  const loadModel = useCallback(async () => {
    console.log(`Loading ${modelName}`);
    try {
      setIsModelLoading(true);
      if (modelName === "mobilenet") {
        const model = await mobilenet.load();
        console.log(`Loaded ${modelName}`);
        setModel(model);
      } else {
        throw Error(`Your model is not currently supported ${modelName}`);
      }
    } catch (error) {
      console.log(`Error while loading ${modelName}`);
      console.log(error);
    } finally {
      setIsModelLoading(false);
    }
  }, [modelName]);

  const classify = useCallback(
    (...inputs: Parameters<mobilenet.MobileNet["classify"]>) => {
      return model?.classify(...inputs);
    },
    [model]
  );
  useEffect(() => {
    loadModel();
  }, [loadModel]);

  return { model, isModelLoading, classify, isModelLoaded: !!model };
}
