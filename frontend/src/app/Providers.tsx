import { ThemeProvider } from '@/components/providers/theme-provider';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default async function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
