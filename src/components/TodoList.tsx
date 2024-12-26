import { FilterTypeProps } from "../App";
import AddTaskForm from "./AddTaskForm";
import { StatusButtons } from "./StatusButtons";
import { TaskPropsType } from "./Task";
import { TasksList } from "./TasksList";
import { TodoListHeader } from "./TodoListHeader";

type TodoListPropsType = {
  title: string;
  tasks: Array<TaskPropsType>;
  activeFilter: string;
  removeTask: (taskId: string) => void;
  changeFilter: (curFilter: FilterTypeProps) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, newStatus: boolean) => void;
};

export const TodoList = ({
  title,
  tasks,
  removeTask,
  changeFilter,
  addTask,
  changeTaskStatus,
  activeFilter,
}: TodoListPropsType) => {
  return (
    <div>
      <TodoListHeader title={title} />
      <AddTaskForm addTask={addTask} />
      <TasksList
        changeTaskStatus={changeTaskStatus}
        tasks={tasks}
        removeTask={removeTask}
      />
      <StatusButtons activeFilter={activeFilter} changeFilter={changeFilter} />
    </div>
  );
};
