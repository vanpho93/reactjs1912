//Note 3 props: subject content important <h3> <p> red
const getClass = isImportant => isImportant ? "red" : "green";
const getHtml = important => important ? null : <button>Xoá</button>;

class Note extends React.Component {
    remove() {
      const { parent, index } = this.props;
      parent.state.mang.splice(index, 1);
      parent.setState(parent.state);
    }
    render() {
        const { subject, content, important } = this.props;
        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
                <p>{content}</p>
                <button onClick={this.remove.bind(this)}>Xoá</button>
            </div>
        );
    }
}

class NoteForm extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <input type="text" ref="txtId" placeholder="id"/>
        <br/><br/>
        <input type="text" ref="txtSubject" placeholder="subject"/>
        <br/><br/>
        <input type="text" ref="txtContent" placeholder="content"/>
        <br/><br/>
        <button>Add</button>
      </div>
    );
  }
}

class List extends React.Component {
    state = { mang: [
        { id: 1, subject: 'Hoc Tap', content: 'Lam bai tap ve nha', important: false},
        { id: 2, subject: 'Hoc Tap', content: 'Nop do an cuoi khoa', important: true},
        { id: 3, subject: 'An Choi', content: 'Di choi 8/3', important: false}
    ]}

    add() {
        let newObj = {
            id: this.refs.txtId.value,
            subject: this.refs.txtSubject.value,
            content: this.refs.txtContent.value,
            important: true
        }
        this.state.mang.push(newObj);
        this.setState(this.state);
    }

    render() {
        let arrayEle = this.state.mang.map((e, i) => (
            <Note
                index={i}
                subject={e.subject}
                content={e.content}
                important={e.important}
                key={e.content}
                parent={this}
            />
        ));
        return (
            <div>
                { arrayEle }
                <NoteForm />
            </div>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
