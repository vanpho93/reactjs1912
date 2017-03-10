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
            <button 
                onClick={this.add.bind(this)}
            >{this.state.value}</button>
        );
    }
}

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }
    add() {
        const { value } = this.state;
        this.setState({ value:  value + 1});
    }
    sub() {
        const { value } = this.state;
        this.setState({ value:  value - 1});
    }
    render() {
        const { value } = this.state;
        return (
            <p>
                <button onClick={this.add.bind(this)}> + </button>
                <h3>{value}</h3>
                <button onClick={this.sub.bind(this)}> - </button>
            </p>
        )
    }
}

ReactDOM.render(<Count />, document.getElementById('root'));
