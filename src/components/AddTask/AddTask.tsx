import Input from "../elements/Input/Input";
import styles from "./AddTask.module.scss";
import Label from "../elements/Label/Label";

const AddTask = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Add New Task</h1>
      <Label htmlFor="title" className={styles.label}>
        Title
      </Label>
      <Input
        className={styles.textField}
        placeholder="Enter task name"
        id="title"
      />
    </div>
  );
};

export default AddTask;
