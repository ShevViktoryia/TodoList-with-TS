import { useState } from "react";
import "./App.css";
import { TaskPropsType } from "./components/Task";
import { TodoList } from "./components/TodoList";
import { v1 } from "uuid";

export type FilterTypeProps = "all" | "active" | "completed";

function App() {
  const [filter, setFilter] = useState<FilterTypeProps>("all");
  const [tasks, setTasks] = useState<Array<TaskPropsType>>([
    { id: v1(), title: "Learn html", isDoing: true },
    { id: v1(), title: "Learn CSS", isDoing: false },
    { id: v1(), title: "Learn React", isDoing: true },
  ]);
  const [error, setError] = useState<boolean>(false);

  const removeTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  let filtresTasks: Array<TaskPropsType> = tasks;

  if (filter === "completed") {
    filtresTasks = tasks.filter((task) => task.isDoing);
  } else if (filter === "active") {
    filtresTasks = tasks.filter((task) => !task.isDoing);
  }

  const changeFilterHandler = (curFilter: FilterTypeProps) => {
    setFilter(curFilter);
  };

  const addTask = (title: string) => {
    const newTask: TaskPropsType = {
      id: v1(),
      title: title.trim(),
      isDoing: false,
    };
    if (newTask.title) {
      const nextState: Array<TaskPropsType> = [...tasks, newTask];
      setTasks(nextState);
    } else {
      setError(true);
    }
  };

  const changeTaskStatus = (taskId: string, newStatus: boolean) => {
    const nextState: Array<TaskPropsType> = tasks.map((task) =>
      task.id === taskId ? { ...task, isDoing: newStatus } : task
    );
    setTasks(nextState);
  };

  return (
    <div className="App">
      <TodoList
        title="To do"
        tasks={filtresTasks}
        removeTask={removeTask}
        changeFilter={changeFilterHandler}
        addTask={addTask}
        activeFilter={filter}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
}

export default App;
