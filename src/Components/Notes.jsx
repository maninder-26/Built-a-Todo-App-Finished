import React, { useState } from "react";

const Notes = ({ value, List, setList, index }) => {
  const [Iscompleted, setIscompleted] = useState(false);
  const Complete = () => {
    setIscompleted(!Iscompleted);
  };

  const Remove = () => {
    let update = List.filter((v, i) => i != index);
    setList(update);
  };

  return (
    <div className="bg-orange-300 h-30 w-1/5 px-2 py-1 rounded-2xl">
      <h1 className="text-center font-semibold">Note</h1>
      <p
        onClick={Complete}
        className={`font-serif ${Iscompleted ? "line-through text-green-900" : "text-black"}`}
      >
        {value}
      </p>

      <div className="flex justify-end ">
        <button
          onClick={Remove}
          className="bg-red-900 px-2 font-semibold text-2xl cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Notes;
