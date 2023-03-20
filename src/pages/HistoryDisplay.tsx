export function HistoryDisplay({
  history, setImageUrl,
}: {
  history: string[];
  setImageUrl: (arg0: string) => void;
}) {
  return (
    <>
      {history.map((image, index) => {
        return (
          <div className="recentPrediction" key={`${image}${index}`}>
            <img
              src={image}
              alt="Recent Prediction"
              onClick={() => setImageUrl(image)} />
          </div>
        );
      })}
    </>
  );
}
