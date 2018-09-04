class lifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      muscleGroups: []
    };
  }

  componentDidMount() {
    this.setState({
      lifts: this.props.lifts,
      muscleGroups: this.props.muscleGroups
    });
  }

  renderMuscleGroups() {
    return this.state.muscleGroups.map(muscleGroup => {
      return (
        <div key={muscleGroup.id}>
          <h3>{muscleGroup.name}</h3>
          <h5>{muscleGroup.area}</h5>
        </div>
      );
    });
  }

  renderLifts() {
    return this.state.lifts.map(lift => {
      return (
        <div key={lift.id}>
          <h3>{lift.name}</h3>
          {lift.muscle_groups.map(mg => (
            <li key={mg}>{mg}</li>
          ))}
        </div>
      );
    });
  }

  renderRows() {
    return this.state.lifts.map(lift => {
      return (
        <tbody key={lift.id}>
          <tr>
            <td>{lift.name}</td>
            <td>
              {lift.muscle_groups.map(mg => (
                <li key={mg}>{mg}</li>
              ))}
            </td>
            <td>0</td>
            <td>0</td>
          </tr>
        </tbody>
      );
    });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <th>Lift Name</th>
          <th>Muscle Groups</th>
          <th>Weight Put Up</th>
          <th>Reps</th>
        </thead>
        {this.renderRows()}
      </table>
    );
  }
}
