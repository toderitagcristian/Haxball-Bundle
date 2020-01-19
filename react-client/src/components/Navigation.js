import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/hax-logo.svg';
import { useAuthState } from './AuthContext';

function Navigation() {
  const AuthState = useAuthState();
  return (
    <div id="navigation">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt="HaxBall React Logo"
            src={logo}
            width="120"
            height="30"
            className="d-inline-block align-top"
          />
          {' '}
            [HaxRO] Haxball Romania
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <div>
                Signed in as:
              {AuthState.isLogged ? (<a href="/profile">{AuthState.discordUsername}</a>) : (<a href="/api/discord/login">Login with Discord</a>)}
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
