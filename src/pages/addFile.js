import React, { useState } from "react";
import { db } from "../utils/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import DragDropFiles from "../components/DragandDropfiles";
import Header from "../components/header";


const Details = () => {
  const userCollectionRef = collection(db, "detail");
  const [newname, setnewname] = useState("");
  const [mins, setmins] = useState("");
  const [min, setmin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    appendData();
  };
  const appendData = async () => {
    try {
      await addDoc(userCollectionRef, {
        newname: newname,
        mins: mins,
        min: min,
      });
    } catch (error) {
      console.log("failed");
    }
  };

  return (
    <>
    <Header/>
    <form className="nameForm" onSubmit={handleSubmit}>
      <label>
          Name of your company<br></br>
      </label>
      <input
        autoFocus
        className="form-input"
        type="text"
        placeholder="Boards + Tables"
        required
        value={newname}
        onChange={(e) => setnewname(e.target.value)}
      />

      <label>
          Document Type<br></br>
      </label>
      <input
        autoFocus
        className="form-input"
        type="text"
        placeholder="Board minutes"
        required
        value={mins}
        onChange={(e) => setmins(e.target.value)}
      />
      <label>
        <p className="four">
          Document Name<br></br>
        </p>
      </label>
      <input
        autoFocus
        id="addMin"
        type="text"
        placeholder="Minutes"
        required
        value={min}
        onChange={(e) => setmin(e.target.value)}
      />
      <div>
      <DragDropFiles/>
      </div>
      
      <div>
        <button className="button3" type="submit">
          Next
        </button>
      </div>
    </form>
    </>
  );
};

export default Details;