import { FilterTypeProps } from "../App";
import { Button } from "./Button";

type StatusButtonsPropsType = {
  changeFilter: (curFilter: FilterTypeProps) => void;
  activeFilter: string;
};

export const StatusButtons = ({
  changeFilter,
  activeFilter,
}: StatusButtonsPropsType) => {
  return (
    <div>
      <Button
        classes={activeFilter === "all" ? "active-filter" : ""}
        title="All"
        onClickHandler={() => changeFilter("all")}
      />
      <Button
        classes={activeFilter === "active" ? "active-filter" : ""}
        title="Active"
        onClickHandler={() => changeFilter("active")}
      />
      <Button
        classes={activeFilter === "completed" ? "active-filter" : ""}
        title="Completed"
        onClickHandler={() => changeFilter("completed")}
      />
    </div>
  );
};
