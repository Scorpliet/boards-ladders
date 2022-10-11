import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import Header from "../components/header";
const Landing = () => {
  const [gridView, setGridView] = useState(true);
  return (
    <>
      <Header />
      <div className="container">
        <div className="sort-filter-bar">
          <h2>Board Minutes</h2>
          <div className="filter-bar">
            <select name="filter" className="btn-filter" style={{fontFamily:"Poppins"}}>
              <option value="Doc Type" selected hidden>
                Doc Type
              </option>
              <option value="Zip">Zip</option>
            </select>
            <input name="filter" placeholder="Date" onFocus={(e)=> e.target.type="date"} onBlur={(e)=> e.target.type="select"} style={{fontFamily:"Poppins"}} className="btn-filter">
            </input>
            <select name="filter" className="btn-filter" style={{fontFamily:"Poppins"}}>
              <option value="Doc Type" hidden>
                Company
              </option>
              <option value="Zip">placeholder</option>
            </select>
          </div>
          <div className="sort-bar">
            <span className="material-icons btn-search">search</span>
            <div className="sort-bar">
              <span style={{ color: "#363636" }}>View</span>
              <span onClick={(e) => setGridView(true)} className={"material-symbols-outlined btn-view " + (gridView ? "" : "view-unselected")}>
                grid_view
              </span>
              |
              <span onClick={(e) => setGridView(false)} className={"material-symbols-outlined btn-view " + (gridView ? "view-unselected" : "")}>
                view_stream
              </span>
            </div>
          </div>
        </div>
        <section className="file-display">
          <div className={gridView ? "files-grid" : "files-list"}>
            
            <Link className={gridView ? "file-card" : "file-tile"} to="/file" >
            <div className={gridView ? "file-card-head" : "file-display-off"}>ZIP</div>
              <div className="content-dock">
              <div className={gridView ? "content-dock-l" : "content-dock-r"}>
              <div className={gridView ? "file-content" : "file-tile-content"}>Minutes</div>
              <div className={gridView ? "file-display-off" : "file-tile-size tile-padding"}>2 Mb</div>
              <div className={gridView ? "file-grid-date" : "file-tile-date tile-padding"}>6 Oct 2022</div>
              </div> 
              <div className="file-type-icon"><img  src="https://img.icons8.com/color/40/zip.png" alt="icon"/></div>
              </div>
            </Link>
            <Link className={gridView ? "file-card" : "file-tile"} to="/file" >
            <div className={gridView ? "file-card-head" : "file-display-off"}>PDF</div>
              <div className="content-dock">
              <div className={gridView ? "content-dock-l" : "content-dock-r"}>
              <div className={gridView ? "file-content" : "file-tile-content"}>Minutes</div>
              <div className={gridView ? "file-display-off" : "file-tile-size tile-padding"}>2 Mb</div>
              <div className={gridView ? "file-grid-date" : "file-tile-date tile-padding"}>6 Oct 2022</div>
              </div> 
              <div className="file-type-icon"><img  src="https://img.icons8.com/color/40/pdf-2--v1.png" alt="icon"/></div>
              </div>
            </Link>
            <Link className={gridView ? "file-card" : "file-tile"} to="/file" >
            <div className={gridView ? "file-card-head" : "file-display-off"}>DOC</div>
              <div className="content-dock">
              <div className={gridView ? "content-dock-l" : "content-dock-r"}>
              <div className={gridView ? "file-content" : "file-tile-content"}>Minutes</div>
              <div className={gridView ? "file-display-off" : "file-tile-size tile-padding"}>2 Mb</div>
              <div className={gridView ? "file-grid-date" : "file-tile-date tile-padding"}>6 Oct 2022</div>
              </div> 
              <div className="file-type-icon"><img  src="https://img.icons8.com/color/40/doc.png" alt="icon"/></div>
              </div>
            </Link>
             
            <div className={gridView ? "" : "btn-container"}>
                <button className="btn-add-file" >+</button>
            </div>         
          </div>
        </section>
      </div>
    </>
  );
};

export default Landing;
