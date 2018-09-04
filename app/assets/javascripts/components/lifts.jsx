class lifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: [],
      muscleGroups: [],
      users: []
    };
  }

  componentDidMount() {
    this.setState({
      lifts: this.props.lifts,
      muscleGroups: this.props.muscleGroups,
      users: this.props.users
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
          {lift.muscle_groups.map(muscleGroup => (
            <li key={muscleGroup}>{muscleGroup}</li>
          ))}
        </div>
      );
    });
  }

  renderUsers() {
    return this.state.users.map(user => {
      return (
        <div key={user.id}>
          <br />
          <h4>Username: {user.username}</h4>
          <h4>E-mail: {user.email}</h4>
          <h4 className="underline">One Rep Maxes</h4>
          {user.onerepmax.map(max => (
            <li key={max.lift}>{`${max.lift}: ${max.max} lbs`}</li>
          ))}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <br />

        <h1>Users</h1>
        {this.renderUsers()}

        <br />

        <h1>Muscle Groups</h1>
        {this.renderMuscleGroups()}

        <br />

        <h1>Lifts</h1>
        {this.renderLifts()}
      </div>
    );
  }
}
