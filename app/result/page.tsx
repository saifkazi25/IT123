import { useEffect, useState } from "react";

export default function Result() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const image = params.get("image");
    if (image) setImageUrl(image);
  }, []);

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Your Fantasy Image</h1>
      {imageUrl ? (
        <img src={imageUrl} alt="Fantasy Result" style={{ maxWidth: "100%" }} />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
}
