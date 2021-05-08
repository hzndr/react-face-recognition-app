import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="description ma2 mb4 near-black">
        {
          "This Face Recognition App will detect faces in your pictures. Give it a try!"
        }
      </p>
      <p className="f3 ma2 mb4">{}</p>
      <div className="flex justify-center">
        <div className="form flex justify-center pa4 br3 shadow-5">
          <input
            className="input f4 pa2 w-80 flex justify-center b--none"
            type="text"
            onChange={onInputChange}
            placeholder="Paste image URL here"
          />
          <button
            className="w-20 grow f4 link ph3 pv2 dib b--none white bg-purple pointer"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
