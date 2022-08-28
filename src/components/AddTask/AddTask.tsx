import { useState } from "react";
import Input from "../elements/Input/Input";
import styles from "./AddTask.module.scss";
import Label from "../elements/Label/Label";
import TextArea from "../elements/TextArea/TextArea";
import Button from "../elements/Button/Button";
import CrossIcon from "../../assets/icon-cross.svg";
import Select, { Option } from "../elements/Select/Select";

interface SubTask {
  id: number;
  value: string;
}

const STATUS_OPTIONS: Option<string>[] = [
  { value: "todo", label: "To Do" },
  { value: "inprogress", label: "In Progress" },
  { value: "done", label: "Done" },
];

const AddTask = () => {
  const [subtasks, setSubtasks] = useState<SubTask[]>([]);
  const [activeStatus, setActiveStatus] = useState(STATUS_OPTIONS[0]);

  const addSubtask = () => {
    setSubtasks([...subtasks, { id: subtasks.length, value: "" }]);
  };

  const removeSubtask = (id: number) => {
    setSubtasks(subtasks.filter((subtask) => subtask.id !== id));
  };

  const changeSubtaskValue = (id: number, value: string) => {
    setSubtasks(
      subtasks.map((subtask) =>
        subtask.id === id ? { ...subtask, value } : subtask
      )
    );
  };

  const changeActiveStatus = (status: Option<string>) =>
    setActiveStatus(status);

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
        <div key={subtask.id} className={styles.subTask}>
          <Input
            className={styles.subTask__input}
            placeholder="Enter subtask name"
            id={`subtask-${subtask.id}`}
            value={subtask.value}
            onChange={(e) => changeSubtaskValue(subtask.id, e.target.value)}
          />
          <button
            className={styles.subTask__removeButton}
            onClick={() => removeSubtask(subtask.id)}
          >
            <img src={CrossIcon} alt="remove subtask" />
          </button>
        </div>
      ))}

      {/* add task button */}
      <Button
        onClick={addSubtask}
        theme="secondary"
        className={styles.addTaskButton}
        fluid
      >
        + Add New Subtask
      </Button>

      {/* status */}
      <Label htmlFor="status" className={styles.status}>
        Status
      </Label>
      <Select
        id="status"
        options={STATUS_OPTIONS}
        value={activeStatus}
        onChange={(value) => changeActiveStatus(value as Option<string>)}
      />
    </div>
  );
};

export default AddTask;
