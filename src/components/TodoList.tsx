import { FilterTypeProps } from "../App";
import AddTaskForm from "./AddTaskForm";
import { StatusButtons } from "./StatusButtons";
import { TaskPropsType } from "./Task";
import { TasksList } from "./TasksList";
import { TodoListHeader } from "./TodoListHeader";

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: number) => void;
  changeFilter: (curFilter: FilterTypeProps) => void;
};

export const TodoList = ({
  title,
  tasks,
  removeTask,
  changeFilter,
}: TodoListPropsType) => {
  return (
    <div>
      <TodoListHeader title={title} />
      <AddTaskForm />
      <TasksList tasks={tasks} removeTask={removeTask} />
      <StatusButtons changeFilter={changeFilter} />
    </div>
  );
};
