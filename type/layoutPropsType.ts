import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement;
  Title?: string;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
