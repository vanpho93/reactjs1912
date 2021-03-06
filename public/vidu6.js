let that;

class Control extends React.Component {
    myAdd(){
      const { parent } = this.props;
      parent.setState({value: parent.state.value + 1});
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
      // that = this;
      return (
          <div>
              <h3>{this.state.value}</h3>
              <button onClick={this.add.bind(this)}>Add Easy</button>
              <Control
                handleAdd={this.add.bind(this)}
                parent={this}
              />
          </div>
      );
    }
}

ReactDOM.render(
  <div>
    <Container />
    <Container />
  </div>, document.getElementById('root'));
