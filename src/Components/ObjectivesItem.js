import styles from "./ObjectivesItem.module.css";

const ObjectivesItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li onClick={deleteHandler} className={styles["task-item"]}>
      {props.children}
    </li>
  );
};

export default ObjectivesItem;
