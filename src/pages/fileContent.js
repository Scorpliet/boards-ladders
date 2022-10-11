import React from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
// import AllPages from "../components/pdf/all-page";
import samplePDF from "../files/Week 09 Instrument Transformers.pdf";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
const FileContent = () => {
  const docs = [
    { uri: require("../files/Lec12.pdf") },
    { uri: require("../files/Readme or die.txt") },
  ];
  //   const {id} = useParams()

  return (
    <>
      <Header />
      <div className="container">
        <div className="sort-filter-bar">
          <div className="filter-bar">
            <a href={docs} download>
              <button className="btn-doc btn-down">DOWNLOAD</button>
            </a>
          </div>
          <div className="sort-bar">
            <button className="btn-doc btn-edit">EDIT DOC</button>
            <button className="btn-doc btn-del">REMOVE</button>
          </div>
        </div>
        <div className="container">
          <DocViewer
            pluginRenderers={DocViewerRenderers}
            documents={docs}
          ></DocViewer>
          {/* <AllPages pdf={samplePDF}></AllPages> */}
        </div>
      </div>
    </>
  );
};

export default FileContent;
