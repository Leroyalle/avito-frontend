import type { FC, Ref } from 'react';
import { clsx } from 'clsx';
import { Spin } from 'antd';

interface Props {
  ref: Ref<HTMLDivElement> | undefined;
  hideCursor: boolean;
  isLoading: boolean;
  className?: string;
}

export const Cursor: FC<Props> = ({ ref, hideCursor, isLoading, className }) => {
  return (
    <>
      {!hideCursor && <div ref={ref} className={clsx('', className)} />}
      <Spin className="absolute top-1/2 left-1/2" spinning={isLoading} />
    </>
  );
};
