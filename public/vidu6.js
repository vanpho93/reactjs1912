class Control extends React.Component {
    myAdd(){
        this.props.handleAdd();
    }
    render() {
        return <button onClick={this.myAdd.bind(this)}>Add</button>;
    }
}

class Container extends React.Component {
    state = { value: 0 }
    add() {
        this.setState({ value: this.state.value + 1 });
    }
    render() {
        return (
            <div>
                <h3>{this.state.value}</h3>
                <button onClick={this.add.bind(this)}>Add Easy</button>
                <Control handleAdd={this.add.bind(this)}/>
            </div>
        );
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));