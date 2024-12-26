import { Task, TaskPropsType } from "./Task";

type TaskListPropsType = {
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: string) => void;
  changeTaskStatus: (taskId: string, newStatus: boolean) => void;
};

export const TasksList = (props: TaskListPropsType) => {
  return props.tasks.length ? (
    <ul>
      {props.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            task={task}
            changeTaskStatus={props.changeTaskStatus}
            removeTask={props.removeTask}
          />
        );
      })}
    </ul>
  ) : (
    <p>Your list is empty</p>
  );
};
