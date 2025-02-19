import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Providers({ children }: Props) {


  return <ThemeProvider attribute="class">{children}</ThemeProvider>; // Wrap children with ThemeProvider after mount
}
