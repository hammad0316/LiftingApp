class lifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: []
    };
  }

  componentDidMount() {
    this.setState({ lifts: this.props.data });
  }

  render() {
    return this.state.lifts.map(lift => {
      return (
        <div key={lift.id}>
          <h1>{lift.name}</h1>
          <h4>{lift.area}</h4>
        </div>
      );
    });
  }
}
