import { Button } from "./Button";

export type TaskPropsType = {
  id: string;
  title: string;
  isDoing: boolean;
};

type curTaskPropsType = {
  task: TaskPropsType;
  removeTask: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newStatus: boolean) => void;
};

export const Task = (props: curTaskPropsType) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.task.isDoing}
        onChange={(e) =>
          props.changeTaskStatus(props.task.id, e.currentTarget.checked)
        }
      />
      <span className={props.task.isDoing ? "task-done" : ""}>
        {props.task.title}
      </span>
      <Button
        title="x"
        onClickHandler={() => props.removeTask(props.task.id)}
      />
    </li>
  );
};
