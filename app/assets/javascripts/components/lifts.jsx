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
          <h2>{muscleGroup.name}</h2>
          <h4>{muscleGroup.area}</h4>
        </div>
      );
    });
  }

  renderLifts() {
    return this.state.lifts.map(lift => {
      return (
        <div key={lift.id}>
          <h2>{lift.name}</h2>
          {lift.muscle_groups.map(mg => (
            <li>{mg}</li>
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
