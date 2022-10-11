import React, { useState } from 'react';
import { Document, Page, pdfjs   } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const AllPages = (props) => {
  const [numPages, setNumPages] = useState(null);
  
  function handleDocument({numPages}){
    setNumPages(numPages)
  }
  const {pdf} = props;
  return (
    <Document file={pdf}  onLoadSuccess={handleDocument}>
        {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  )
}

export default AllPages