import "./ObjectivesList.css";
import ObjectivesItem from "./ObjectivesItem";

const ObjectivesList = (props) => {
  return (
    <ul className="objective-list">
      {props.items.map((objective) => (
        <ObjectivesItem
          key={objective.id}
          id={objective.id}
          onDelete={props.onDeleteItem}
        >
          {objective.task}
        </ObjectivesItem>
      ))}
    </ul>
  );
};

export default ObjectivesList;
