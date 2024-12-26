import { isDisabled } from "@testing-library/user-event/dist/utils";

type ButtonsPropsType = {
  title: string;
  onClickHandler?: () => void;
  isDisabled?: boolean;
  classes?: string;
};

export const Button = ({
  title,
  onClickHandler,
  isDisabled,
  classes,
}: ButtonsPropsType) => {
  return (
    <button className={classes} disabled={isDisabled} onClick={onClickHandler}>
      {title}
    </button>
  );
};
