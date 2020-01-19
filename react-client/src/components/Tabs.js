import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import HomePage from './HomePage';
import StatisticsPage from './StatisticsPage';
import ProfilePage from './ProfilePage';

import { useAuthState } from './AuthContext';

function ControlledTabs() {
  const [key, setKey] = useState('home');
  let AuthState = useAuthState();
  
  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="home" title="Home">
        <HomePage />
      </Tab>
      <Tab eventKey="statistics" title="Statistics">
      <StatisticsPage />
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <ProfilePage />
      </Tab>
    </Tabs>
  );
}

export default ControlledTabs;
