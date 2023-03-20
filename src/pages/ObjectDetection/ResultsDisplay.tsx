export function ResultsDisplay({
  results,
}: {
  results: ({ className: string; probability: number; }[] | undefined)[] | null;
}) {
  return (
    <>
      {(results || ([] as any[])).map((result, index) => {
        return (
          <div className="result" key={result.className}>
            <span className="name">{result.className}</span>
            <span className="confidence">
              Confidence level: {(result.probability * 100).toFixed(2)}%{" "}
              {index === 0 && <span className="bestGuess">Best Guess</span>}
            </span>
          </div>
        );
      })}
    </>
  );
}
