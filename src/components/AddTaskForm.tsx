import { useRef } from "react";
import { Button } from "./Button";

type AddTaskFormProps = {
  addTask: (title: string) => void;
};

export const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
  const taskInputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input ref={taskInputRef} />
      <Button
        title="+"
        onClickHandler={() => {
          if (taskInputRef.current) {
            addTask(taskInputRef.current.value);
            taskInputRef.current.value = "";
          }
        }}
      />
    </div>
  );
};

export default AddTaskForm;
