import React, { useState } from "react";
import Header from "./header";
import 'animate.css';
const Starting = () => {
  const [fadeOut, setFadeOut] = useState(false)
  const exitChange = () =>{
    setFadeOut(true)
  }
  return (
    <>
      <div className={"sidebar full animate__animated" + (fadeOut ? " animate__fadeOutUp animate__slow" : "")}>
        <Header start={true} />
        <div className="c-con c-con-col sidebar-content">
          <span className="c-con-p txt-cen">
            Welcome to{" "}
            <span style={{ fontWeight: "800" }}>Boards and Tables</span>
          </span>
          <br />
          <br />
          <span className="label txt-cen">
            View and share important company and board docs seccurally and
            confidentiallity on the blockchain<br/><br/>
          </span>
            <svg
              width="6"
              height="73"
              viewBox="0 0 6 73"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="3"
                y1="73.5"
                x2="3"
                y2="2.5"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="10 10"
              />
            </svg>

            <svg
              width="62"
              height="114"
              viewBox="0 10 62 114"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_23_115)">
                <path
                  d="M29.2322 96.7678C30.2085 97.7441 31.7915 97.7441 32.7678 96.7678L48.6777 80.8579C49.654 79.8816 49.654 78.2986 48.6777 77.3223C47.7014 76.346 46.1184 76.346 45.1421 77.3223L31 91.4645L16.8579 77.3223C15.8816 76.346 14.2986 76.346 13.3223 77.3223C12.346 78.2986 12.346 79.8816 13.3223 80.8579L29.2322 96.7678ZM28.5 8L28.5 95L33.5 95L33.5 8L28.5 8Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_23_115"
                  x="0.589844"
                  y="0"
                  width="60.8203"
                  height="113.5"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feMorphology
                    radius="2"
                    operator="dilate"
                    in="SourceAlpha"
                    result="effect1_dropShadow_23_115"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.113725 0 0 0 0 0.14902 0 0 0 0 0.443137 0 0 0 0.22 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_23_115"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_23_115"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg> 
            <button className="btn-next btn-start btn-link" onClick={exitChange}>START NOW</button>
        </div>
      </div>
    </>
  );
};

export default Starting;
