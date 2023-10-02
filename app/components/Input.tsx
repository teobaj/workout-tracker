import { ChangeEventHandler, FC, HTMLInputTypeAttribute } from 'react';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
};

export const Input: FC<InputProps> = ({ type = 'text', onChange, label }) => {
  return (
    <div className="flex flex-col">
      {label && <span>{label}</span>}
      <input
        className="border-2 border-sky-600 rounded focus:outline-none focus:border-sky-800"
        type={type}
        onChange={onChange}
      ></input>
    </div>
  );
};
