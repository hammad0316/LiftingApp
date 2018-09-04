class table extends React.Component {
  renderRows() {
    return this.state.lifts.map(lift => {
      return (
        <div key={lift.id}>
          <td>{lift.name}</td>
          <td>
            {lift.muscle_groups.map(mg => (
              <li key={mg}>{mg}</li>
            ))}
          </td>
          <td>0</td>
          <td>0</td>
        </div>
      );
    });
  }

  render() {
    return (
      <table>
        <thead>
          <th>Lift Name</th>
          <th>Muscle Groups</th>
          <th>Weight Put Up</th>
          <th>Reps</th>
        </thead>
        <tbody>
          <tr>{this.renderRows()}</tr>
        </tbody>
      </table>
    );
  }
}
