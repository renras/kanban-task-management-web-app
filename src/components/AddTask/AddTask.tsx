import { useState } from "react";
import Input from "../elements/Input/Input";
import styles from "./AddTask.module.scss";
import Label from "../elements/Label/Label";
import TextArea from "../elements/TextArea/TextArea";

interface SubTask {
  id: number;
  value: string;
}

const AddTask = () => {
  const [subtasks, setSubtasks] = useState<SubTask[]>([]);

  const addSubtask = () => {
    setSubtasks([...subtasks, { id: subtasks.length, value: "" }]);
  };
  const removeSubtask = (id: number) => {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
  };
  const onSubtaskValueChange = (id: number, value: string) => {
    setSubtasks(
      subtasks.map((subtask) =>
        subtask.id === id ? { ...subtask, value } : subtask
      )
    );
  };

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

      {/* subtasks */}
      <Label id="subtasks" className={styles.label}>
        Subtasks
      </Label>
      {subtasks.map((subtask) => (
        <div key={subtask.id} className={styles.subtask}>
          <Input
            className={styles.textField}
            placeholder="Enter subtask name"
            id={`subtask-${subtask.id}`}
            value={subtask.value}
            onChange={(e) => onSubtaskValueChange(subtask.id, e.target.value)}
          />
          <button
            className={styles.removeButton}
            onClick={() => removeSubtask(subtask.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button onClick={addSubtask}>+ Add New Subtask</button>
    </div>
  );
};

export default AddTask;
