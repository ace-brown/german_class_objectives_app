import "./ObjectivesInput.css";
import { useState } from "react";
import Button from "./Button";

const ObjectivesInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const objectiveInputChangeHandler = (event) => {
    // Reseting the input after submission
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddObjective(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler} className="input-form">
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Objective</label>
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
