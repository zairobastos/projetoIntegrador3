import { Input, Campo } from "./input.styled";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  width: number;
  id: string;
}

export const InputLogin = ({
  label,
  type,
  placeholder,
  width,
  id,
}: InputProps) => {
  return (
    <Input>
      <div>
        <label htmlFor={id}>{label}</label>
        <Campo
          type={type}
          id={id}
          placeholder={placeholder}
          width={width}
          required
        />
      </div>
    </Input>
  );
};
