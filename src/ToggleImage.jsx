import { useState } from "react";

function ToggleImage() {
  const [showImage, setShowImage] = useState(true);
  const myImage = "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=500&auto=format";

  return (
    <>
      <h1>React Image Toggle Example</h1>
      <button onClick={() => setShowImage(!showImage)}>
        {showImage ? "Hide Image" : "Show Image"}
      </button>
      <br /><br />
      {showImage && (
        <img src={myImage} width="300" alt="Beautiful Car" />
      )}
    </>
  );
}

export default ToggleImage;
