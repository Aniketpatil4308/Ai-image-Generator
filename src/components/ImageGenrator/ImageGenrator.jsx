import React, { useRef, useState } from "react";
import "./ImageGenrator.css";
import default_image from "../Assets/default_image.svg";

function ImageGenrator() {
  0;
  const [image_url, setImage_url] = useState("/");

  let inputRef = useRef(null);

  const imageGenrator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "User-Agent": "Chrome",
        },
        body: JSON.stringify({
          prompt: `${inputRef.current.value}`,
          n: 1,
          size: "1024x1024",
        }),
      }
    );

    let data = await response.json();
    console.log(data);
  };

  return (
    <div className="ai-image-genrator">
      <div className="header">
        Ai image <span>genrator</span>
      </div>
      <div className="img-loading">
        <div className="image">
          <img src={image_url === "/" ? default_image : image_url} alt="" />
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          ref={inputRef}
          className="search-input"
          placeholder="Describe What You Want To See"
        />
        <div className="generate-btn" onClick={() => imageGenrator()}>
          Generate
        </div>
      </div>
    </div>
  );
}

export default ImageGenrator;

// api key : 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
