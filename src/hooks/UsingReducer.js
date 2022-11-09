import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleshowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};
const UsingReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleshowText" });
          //   setCount(count + 1);
          //   setShowText(!showText);
        }}
      >
        Click Here
        {/* </button>
    {showText && <p> This is a a text</p>}
  </div> */}
      </button>
      {state.showText && <p> This is a a text</p>}
    </div>
  );
};

export default UsingReducer;
