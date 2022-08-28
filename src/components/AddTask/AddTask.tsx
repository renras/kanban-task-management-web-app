import Input from "../elements/Input/Input";
import styles from "./AddTask.module.scss";
import Label from "../elements/Label/Label";
import TextArea from "../elements/TextArea/TextArea";

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
      <Label htmlFor="description" className={styles.label}>
        Description
      </Label>
      <TextArea
        id="description"
        className={styles.textField}
        placeholder="e.g. It’s always good to take a break. This 15 minute break will 
recharge the batteries a little."
      ></TextArea>
    </div>
  );
};

export default AddTask;
