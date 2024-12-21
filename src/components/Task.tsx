import { Button } from "./Button";

export type TaskPropsType = {
  id: number;
  title: string;
  isDoing: boolean;
};

type curTaskPropsType = {
  task: TaskPropsType;
  removeTask: (taskId: number) => void;
};

export const Task = (props: curTaskPropsType) => {
  return (
    <li>
      <input type="checkbox" checked={props.task.isDoing} />
      <span>{props.task.title}</span>
      <Button
        title="x"
        onClickHandler={() => props.removeTask(props.task.id)}
      />
    </li>
  );
};
