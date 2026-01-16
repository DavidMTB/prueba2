import type { ReactNode } from 'react';
import Header from '../components/Header';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ padding: 20 }}>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
