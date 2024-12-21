import { Task, TaskPropsType } from "./Task";

type TaskListPropsType = {
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: number) => void;
};

export const TasksList = (props: TaskListPropsType) => {
  return props.tasks.length ? (
    <ul>
      {props.tasks.map((task) => {
        return <Task key={task.id} task={task} removeTask={props.removeTask} />;
      })}
    </ul>
  ) : (
    <p>Your list is empty</p>
  );
};
