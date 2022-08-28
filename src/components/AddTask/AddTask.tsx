import Input from "../elements/Input/Input";
import styles from "./AddTask.module.scss";

const AddTask = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add New Task</h1>
      <Input placeholder="Enter task name" />
    </div>
  );
};

export default AddTask;
