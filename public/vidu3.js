class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 10 };
    }
    add() {
        this.setState({ value: ++this.state.value });
    }
    render() {
        return( 
            <button onClick={this.add.bind(this)}>{this.state.value}</button>
        );
    }
}

ReactDOM.render(<Box />, 
    document.getElementById('root'));

