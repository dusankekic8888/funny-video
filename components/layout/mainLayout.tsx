import { LayoutProps } from '@/type/layoutPropsType';
import { setUser } from 'features/auth/userSlice';
import { useAppDispatch } from 'hooks';
import { useRouter } from 'next/dist/client/router';
import React, { Fragment, ReactElement, useEffect } from 'react';
import useSWR from 'swr';
import Header from '../common/header';

export function MainLayout({ children }: LayoutProps): ReactElement {
  const { data, error } = useSWR('me');
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    if (data && data.email) dispatch(setUser(data));
  }, [data]);

  return (
    <div className="bg-white">
      <div className="container mx-auto h-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
