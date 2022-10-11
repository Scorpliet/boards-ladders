import { useState, useRef } from "react";

const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
  };

  return (
    <>
      <div className="dropzone" onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="gradient-box">
          <img src="/images/cloud.png" alt="" />
          <h1 className="drag">Drag and Drop a file</h1>
          <h1 className="drag1">Or</h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          />
          {files ? (
            <div className="uploads">
              <ul>
                {Array.from(files).map((file, idx) => (
                  <li key={idx}>{file.name}</li>
                ))}
              </ul>
              <div className="actions">
                <button onClick={() => setFiles(null)}>Cancel</button>
                <button onClick={handleUpload}>Upload</button>
              </div>
            </div>
          ) : (
            <></>
          )}
          <button className="button1" onClick={() => inputRef.current.click()}>
            Browse File
          </button>
        </div>
      </div>
    </>
  );
};

export default DragDropFiles;
