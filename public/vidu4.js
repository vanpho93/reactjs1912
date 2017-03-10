class Box extends React.Component {
    state = { value: 0, age: 100 }
    add() {
        const { value } = this.state;
        this.state.value = (1 + value) % 8;
        this.setState(this.state);
    }
    sub() {
        const { value } = this.state;
        this.setState({ value: (value - 1 + 8) % 8 });
    }
    render() {
        return (
            <div>
                <img src={ this.state.value + '.png'} />
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