import { LayoutProps } from '@/type/layoutPropsType';
import React, { ReactElement } from 'react';
import Header from '../common/header';

export function EmptyLayout({ children }: LayoutProps): ReactElement {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
}
