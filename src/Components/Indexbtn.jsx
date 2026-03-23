import React from "react";

const Indexbtn = (props) => {
  return (
    <div id="indexdiv">
      <button
        onClick={() => {
          let nextbtn = document.querySelector("#next");
          if (props.index >= 1) {
            props.setIndex(props.index - 1);
            props.setPro([]);
            nextbtn.disabled = false;
          }
        }}
        className="indexbtn"
      >
        prev{" "}
      </button>
      <button
        onClick={(e) => {
          if (props.index > 9) {
            e.target.disabled = true;
          } else if (props.index < 9) {
            props.setIndex(props.index + 1);
            props.setPro([]);
            e.target.disabled = false;
          }
        }}
        className="indexbtn"
        id="next"
      >
        Next
      </button>
    </div>
  );
};

export default Indexbtn;
