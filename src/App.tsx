import { useState } from "react";
import "./App.css";
import { TaskPropsType } from "./components/Task";
import { TodoList } from "./components/TodoList";

export type FilterTypeProps = "all" | "active" | "completed";

function App() {
  const [tasks, setTasks] = useState<Array<TaskPropsType>>([
    { id: 1, title: "Learn html", isDoing: true },
    { id: 2, title: "Learn CSS", isDoing: false },
    { id: 3, title: "Learn React", isDoing: true },
  ]);

  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const [filter, setFilter] = useState<FilterTypeProps>("all");
  let filtresTasks: Array<TaskPropsType> = tasks;

  if (filter === "completed") {
    filtresTasks = tasks.filter((task) => task.isDoing);
  } else if (filter === "active") {
    filtresTasks = tasks.filter((task) => !task.isDoing);
  }

  const changeFilterHandler = (curFilter: FilterTypeProps) => {
    setFilter(curFilter);
  };

  return (
    <div className="App">
      <TodoList
        title="To do"
        tasks={filtresTasks}
        removeTask={removeTask}
        changeFilter={changeFilterHandler}
      />
    </div>
  );
}

export default App;
