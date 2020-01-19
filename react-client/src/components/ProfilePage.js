import React from 'react';
import Table from 'react-bootstrap/Table';
import { useAuthState } from './AuthContext';

function ProfileTable(props) {
  if (!props.tableData) {
    return (<p>No statistics found ! Register with Discord Bot and play some games !</p>);
  }
  const {
    haxballAuthKey, banned, role, goals, assists, matches
  } = props.tableData;
  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Role</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Matches</th>
          <th>Banned</th>
        </tr>
      </thead>
      <tbody>
        <tr key={haxballAuthKey}>
          <td>{role}</td>
          <td>{goals}</td>
          <td>{assists}</td>
          <td>{matches}</td>
          <td>{banned}</td>
        </tr>
      </tbody>
      <tfoot />
    </Table>
  );
}

function ProfilePage() {
  const AuthState = useAuthState();

  return (

    <div>
      <h2>Profile Page</h2>
      <p>Database results:</p>
      <div>
        {
        AuthState.isLogged === false
          ? (<p>You are not logged in ! Please login with Discord from top right corner !</p>)
          : (
            <>
              <p>
                Welcome
                {' '}
                {AuthState.discordUsername}
              </p>
              <ProfileTable tableData={AuthState.haxData} />
            </>
          )
        }
      </div>
    </div>

  );
}

export default ProfilePage;
