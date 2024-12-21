import { FilterTypeProps } from "../App";
import { Button } from "./Button";

type StatusButtonsPropsType = {
  changeFilter: (curFilter: FilterTypeProps) => void;
};

export const StatusButtons = ({ changeFilter }: StatusButtonsPropsType) => {
  return (
    <div>
      <Button title="All" onClickHandler={() => changeFilter("all")} />
      <Button title="Active" onClickHandler={() => changeFilter("active")} />
      <Button
        title="Completed"
        onClickHandler={() => changeFilter("completed")}
      />
    </div>
  );
};
