import Header from '../components/Header';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header
        onSearch={() => {}}
        onCategoria={() => {}}
      />
      <main style={{ padding: 20 }}>{children}</main>
    </>
  );
};

export default MainLayout;
