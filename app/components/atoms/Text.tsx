import {FC} from 'react';

interface TextProps {
  content: string;
  className : string
}

const Text: FC<TextProps> = ({ content, className}) => {
  return <p className={className}>{content}</p>;
}

export default Text;
