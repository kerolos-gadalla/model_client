import { useEffect, useRef } from "react";
import { useClipboardImageUrl } from "./useClipboardImageUrl";

export function ImageUploadComponent({
  setImageUrl,
}: {
  setImageUrl: (url: string | null | undefined) => unknown;
}) {
  const textInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { clipboardImageUrl } = useClipboardImageUrl();

  useEffect(() => {
    setImageUrl(clipboardImageUrl);
  }, [clipboardImageUrl, setImageUrl]);

  const triggerUpload = () => {
    if (fileInputRef.current) {
      (fileInputRef.current as any).click();
    }
  };

  const uploadImage: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files;
    if ((files?.length || 0) > 0) {
      const file = event.target.files?.[0];
      if (file) {
        const url = URL.createObjectURL(file);
        setImageUrl(url);
        return;
      }
    }
    setImageUrl(null);
    return;
  };

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setImageUrl(e.target.value as string);
  };

  return (
    <div className="inputHolder">
      <input
        type="file"
        accept="image/*"
        capture="user"
        className="uploadInput"
        onChange={uploadImage}
        ref={fileInputRef} />
      <button className="uploadImage" onClick={triggerUpload}>
        Upload Image
      </button>
      <span className="or">OR</span>
      <input
        type="text"
        placeholder="Paster image URL"
        ref={textInputRef}
        onChange={handleOnChange} />
    </div>
  );
}
