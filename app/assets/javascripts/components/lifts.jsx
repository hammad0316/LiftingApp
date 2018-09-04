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

  render() {
    return (
      <div>
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
