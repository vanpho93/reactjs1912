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
        console.log('Xin chao');
        return (
            <div>
                <button onClick={this.add.bind(this)}> + </button>
                    <h3>{value}</h3>
                    <h3>{value + 1}</h3>
                    <h3>{value + 2}</h3>
                <button onClick={this.sub.bind(this)}> - </button>
            </div>
        )
    }
}

ReactDOM.render(<Count />, document.getElementById('root'));
