import type { FC, ReactNode } from 'react';

interface CommonLayoutProps {
  children: ReactNode;
  type? : string
}

const CommonLayout: FC<CommonLayoutProps> = ({ type,children }) => {
  return (
    <div className="size-full flex">
      <div className={`size-full ${type ? 'max-w-screen-sm' : 'max-w-screen-lg'} mx-auto`}>{children}</div>
    </div>
  );
};

export default CommonLayout;
