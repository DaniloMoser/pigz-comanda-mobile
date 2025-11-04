import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { LoginScreen, CashSelectionScreen } from './src/screens';

type AppState = 'login' | 'cash_selection';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppState>('login');

  const handleLoginSuccess = () => {
    setCurrentScreen('cash_selection');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  return (
    <>
      <StatusBar style="auto" />
      
      {currentScreen === 'login' && (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      )}
      
      {currentScreen === 'cash_selection' && (
        <CashSelectionScreen onBack={handleBackToLogin} />
      )}
    </>
  );
}