import React from "react";
import "./FaceRecognition.css";
import Tilt from "react-tilt";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <Tilt className="Tilt" options={{ max: 15 }} style={{ width: "500px" }}>
          <div className="Tilt-inner">
            <img
              id="input-image"
              className="shadow-2"
              src={imageUrl}
              alt=""
              width="500px"
              height="auto"
            />
          </div>
          <div
            className="bounding_box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        </Tilt>
      </div>
    </div>
  );
};

export default FaceRecognition;
