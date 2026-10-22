import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import MainTabs from './src/navigation/MainTabs';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <MainTabs onLogout={() => setIsAuthenticated(false)} />
      ) : (
        <AuthStack onLogin={() => setIsAuthenticated(true)} />
      )}
    </NavigationContainer>
  );
}
