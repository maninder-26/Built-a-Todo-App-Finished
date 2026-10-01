import React, { useState } from "react";
import Notes from "./Components/Notes";

const App = () => {
  const [List, setList] = useState([]);

  const SaveData = (event) => {
    event.preventDefault();

    let value = event.target.value.value;
    if (value.trim() === "") {
      alert("Please enter a note");
      return;
    }

    if (!List.includes(value)) {
      setList([...List, value]);
      event.target.value.value = "";
    } else {
      alert("Alrady exist ");
    }
  };

  let li = List.map((value, index) => {
    return (
      <Notes
        key={index}
        value={value}
        List={List}
        setList={setList}
        index={index}
      />
    );
  });

  return (
    <div className="bg-blue-200 h-screen px-10 py-10 w-full">
      <form onSubmit={SaveData}>
        <div className="flex justify-center ">
          <h1 className="bg-pink-300 shadow-amber-700 text-2xl  font-semibold px-2 py-1 rounded">
            Notes App
          </h1>
        </div>
        <div className=" w-full flex justify-center">
          <div className="bg-green-200 px-10 py-5 flex gap-5">
            <input
              className="border border-black py-1 px-2"
              type="text"
              placeholder="Enter here..."
              name="value"
            />
            <button className="bg-green-500 px-2 py-1 font-semibold text-xl">
              Add Note
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-wrap gap-18 w-full mt-5">{li}</div>
    </div>
  );
};

export default App;
