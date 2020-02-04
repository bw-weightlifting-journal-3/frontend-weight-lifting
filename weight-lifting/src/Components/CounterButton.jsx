import React from "react";

// Props will always be an object or collection of all the attributes we write in our component
const CounterButton = props => {
  console.log("counterbutton", props);

  return (
    <button
      className="button"
      // We add the onClick here. We can't add it to our component in Counter because we aren't clicking on the component. We are clicking on the stuff the component makes. In this case our button
      onClick={() => props.number()}
    >
      {props.buttonValue}
    </button>
  );
};
export default CounterButton;