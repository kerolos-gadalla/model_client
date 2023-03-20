export function ImageDisplay({
  imageUrl,
  imageRef,
}: {
  imageUrl: string| null;
  imageRef: React.Ref<HTMLImageElement> | undefined;
}) {
  return (
    <>
      {imageUrl && (
        <img
          src={imageUrl || ""}
          alt="Upload Preview"
          crossOrigin="anonymous"
          ref={imageRef}
        />
      )}
    </>
  );
}
