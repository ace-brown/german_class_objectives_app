import "./ObjectivesItem.css";

const ObjectivesItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className="task-item">
      {props.children}
    </li>
  );
};

export default ObjectivesItem;
