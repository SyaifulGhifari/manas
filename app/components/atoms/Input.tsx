import {FC} from 'react'

interface InputProps {
  placeholder: string;
  type: string;
  className: string
}

const Input: FC<InputProps> = ({ placeholder, type, className }) => {
  return <input type={type} placeholder={placeholder} className={className}/>;
}

export default Input;
