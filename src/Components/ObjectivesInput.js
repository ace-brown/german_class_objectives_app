import "./ObjectivesInput.css";
import { useState } from "react";
import Button from "./Button";

const ObjectivesInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const objectiveInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddObjective(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} className="input-form">
      <div className="form-control">
        <label for="objective-input">Objective</label>
        <input
          type="text"
          id="objective-input"
          placeholder="Write somthing..."
          onChange={objectiveInputChangeHandler}
        ></input>
      </div>
      <Button type="submit">Add Objective</Button>
    </form>
  );
};

export default ObjectivesInput;
