class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
    }
    add() {
        const { value } = this.state;
        this.setState({ value: 1 + value });
    }
    sub() {
        const { value } = this.state;
        this.setState({ value: value - 1 });
    }
    render() {
        return (
            <div>
                <img src={this.state.value + '.png'} />
                <hr />
                <button onClick={this.add.bind(this)}> + </button>
                <button onClick={this.sub.bind(this)}> - </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Box />,
    document.getElementById('root')
);