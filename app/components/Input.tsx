import {
  ChangeEventHandler,
  DetailedHTMLProps,
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  name?: string;
  min?: string;
};

export const Input: FC<InputProps> = ({
  type = 'text',
  onChange,
  label,
  name,
  min,
}) => {
  return (
    <div className="flex flex-col">
      {label && <span>{label}</span>}
      <input
        className="border-2 border-sky-600 rounded-md focus:outline-none focus:border-sky-800 p-1"
        type={type}
        onChange={onChange}
        name={name}
        min={min}
      ></input>
    </div>
  );
};
