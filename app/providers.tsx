"use client";
import { ReactNode } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from "next-themes";
type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
