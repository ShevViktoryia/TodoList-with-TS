import { ChangeEvent, KeyboardEvent, useState } from "react";
import { Button } from "./Button";

type AddTaskFormProps = {
  addTask: (title: string) => void;
};

export const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const isPossibleToAddTask = taskTitle.length && taskTitle.length <= 15;

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTaskTitle(e.currentTarget.value);
  const onClickHandler = () => {
    addTask(taskTitle);
    setTaskTitle("");
  };
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) =>
    e.key === "Enter" && onClickHandler();

  return (
    <div>
      <input
        value={taskTitle}
        onChange={inputChangeHandler}
        onKeyDown={onKeyDownHandler}
      />
      <Button
        title="+"
        isDisabled={!isPossibleToAddTask}
        onClickHandler={onClickHandler}
      />
      {!isPossibleToAddTask && <div>Enter Task title (max 15 chars)</div>}
    </div>
  );
};

export default AddTaskForm;
