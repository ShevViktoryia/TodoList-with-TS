import { FilterTypeProps } from "../App";
import AddTaskForm from "./AddTaskForm";
import { StatusButtons } from "./StatusButtons";
import { TaskPropsType } from "./Task";
import { TasksList } from "./TasksList";
import { TodoListHeader } from "./TodoListHeader";

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskPropsType>;
  removeTask: (taskId: string) => void;
  changeFilter: (curFilter: FilterTypeProps) => void;
  addTask: (title: string) => void;
};

export const TodoList = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
}: TodoListPropsType) => {
  return (
    <div>
      <TodoListHeader title={title} />
      <AddTaskForm addTask={addTask} />
      <TasksList tasks={tasks} removeTask={removeTask} />
      <StatusButtons changeFilter={changeFilter} />
    </div>
  );
};
