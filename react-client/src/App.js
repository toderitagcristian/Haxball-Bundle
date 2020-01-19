import React from 'react';
import './App.css';

// Bootstrap elements
import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from './components/AuthContext';
import Navigation from './components/Navigation';
import ControlledTabs from './components/Tabs';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navigation />
        <ControlledTabs />
      </AuthProvider>
    </div>
  );
}

export default App;
