import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Providers: FC<Props> = ({ children }) => {
  return <AntdRegistry>{children}</AntdRegistry>;
};
