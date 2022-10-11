import React from "react";
import Header from "../components/header";
import { useParams } from "react-router-dom";
import AllPages from "../components/pdf/all-page";
import samplePDF from "../files/Lec12.pdf";
// import DocViewer, { DocViewerRenderers, PDFRenderer } from "react-doc-viewer";
// import FileViewer from "react-file-viewer";
const FileContent = () => {
  const file = require("../files/Lec12.pdf");
  //   const {id} = useParams()

  return (
    <>
      <Header />
      <div className="container">
        <div className="sort-filter-bar">
          <div className="filter-bar">
            <a href={file} download>
              <button className="btn-doc btn-down">DOWNLOAD</button>
            </a>
          </div>
          <div className="sort-bar">
            <button className="btn-doc btn-edit">EDIT DOC</button>
            <button className="btn-doc btn-del">REMOVE</button>
          </div>
        </div>
        <div className="container">
          {/* <FileViewer fileType={type} filePath={file} /> */}

          <AllPages pdf={file}></AllPages>
        </div>
      </div>
    </>
  );
};

export default FileContent;
