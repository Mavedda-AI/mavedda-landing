"use client";

import React from 'react';
import {ThemeProvider} from './ThemeProvider';
import {LanguageProvider} from './LanguageProvider';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
};
