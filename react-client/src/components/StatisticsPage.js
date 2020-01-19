import React from 'react';
import Table from 'react-bootstrap/Table';

function StatsTable(props) {
  if (!props.tableData) {
    return (<p>No statistics found in database !</p>);
  }

  const renderTable = () => props.tableData.map((player, index) => {
    const {
      haxballAuthKey, banned, role, goals, assists, matches, discordUsername
    } = player;
    return (
      <tr key={haxballAuthKey}>
        <td>{discordUsername}</td>
        <td>{role}</td>
        <td>{goals}</td>
        <td>{assists}</td>
        <td>{matches}</td>
        <td>{banned}</td>
      </tr>
    );
  });

  return (
    <Table responsive striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Discord Username</th>
          <th>Role</th>
          <th>Goals</th>
          <th>Assists</th>
          <th>Matches</th>
          <th>Banned</th>
        </tr>
      </thead>
      <tbody>
        {renderTable()}
      </tbody>
      <tfoot />
    </Table>
  );
}

function StatisticsPage() {
  const [dbData, setdbData] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/users`)
        .then(res => res.json())
        .then((res) => {
          setdbData(res);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Alltime stats</h1>
      <p>Database retrieval:</p>
      <StatsTable tableData={dbData} />
    </div>
  );
}

export default StatisticsPage;
