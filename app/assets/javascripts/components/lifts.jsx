class lifts extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            lifts: []
        }
    }

    componentDidMount(){
        this.setState({lifts: this.props.data})
    }

    render(){
        return(
            this.state.lifts.map((lift) => {
                return(
                    <div key={lift.id}>
                        <h6>{lift.liftname}</h6>
                        <p>{lift.weightlifted}</p>
                    </div>
                )
            })
        )
    }




}