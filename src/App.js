import ObjectivesList from "./Components/ObjectivesList";
import ObjectivesInput from "./Components/ObjectivesInput";
import { useState } from "react";

const App = (props) => {
  const [objectives, setObjectives] = useState([
    { task: "Practise the Pronounciation", id: "t1" },
    { task: "Reading Comprehension", id: "t2" },
    { task: "Oral Comprehension", id: "t3" },
  ]);

  const addObjectiveHandler = (enteredValue) => {
    setObjectives((prevObjectives) => {
      const updatedObjectivs = [...prevObjectives];
      updatedObjectivs.unshift({
        task: enteredValue,
        id: Math.random().toString(),
      });
      return updatedObjectivs;
    });
  };

  const deleteItemHandler = (objectiveId) => {
    setObjectives((prevObjectives) => {
      const updatedObjectivs = prevObjectives.filter(
        (objective) => objective.id !== objectiveId
      );
      return updatedObjectivs;
    });
  };

  return (
    <div>
      <ObjectivesInput onAddObjective={addObjectiveHandler} />
      <ObjectivesList items={objectives} onDeleteItem={deleteItemHandler} />
    </div>
  );
};

export default App;
