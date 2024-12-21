type ButtonsPropsType = {
  title: string;
  onClickHandler?: () => void;
};

export const Button = ({ title, onClickHandler }: ButtonsPropsType) => {
  return <button onClick={onClickHandler}>{title}</button>;
};
