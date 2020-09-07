import React from 'react';
import AppRouter from './app/Router';
import { AppLayout } from './components/app-layout/AppLayout';

function App() {
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  );
}

export default App;
