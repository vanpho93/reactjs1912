//Note 3 props: subject content important <h3> <p> red
const getClass = isImportant => isImportant ? "red" : "green";
const getHtml = important => important ? null : <button>Xoá</button>;

class Note extends React.Component {
    state = {isUpdating: false}
    save() {
        const newContent = this.refs.txtContent.value;
        const { parent, index } = this.props;
        parent.state.mang[index].content = newContent;
        parent.setState(parent.state);

        this.state.isUpdating = false;
        this.setState(this.state);
    }
    cancel() {
        this.state.isUpdating = false;
        this.setState(this.state);
    }
    update() {
        this.state.isUpdating = true;
        this.setState(this.state);
    }
    remove() {
      const { parent, index } = this.props;
      parent.state.mang.splice(index, 1);
      parent.setState(parent.state);
    }
    render() {
        const { subject, content, important } = this.props;
        const input = <input type="text" defaultValue={content} placeholder="Enter new content" ref="txtContent"/>;
        const xhtml = this.state.isUpdating ? input : <p>{content}</p>;

        const buttonUpdate = (
            <div>
                <button onClick={this.cancel.bind(this)}>Huỷ</button>
                <button onClick={this.save.bind(this)}>Lưu</button>
            </div>
        );

        const buttonNotUpdate = (
            <div>
                <button onClick={this.remove.bind(this)}>Xoá</button>
                <button onClick={this.update.bind(this)}>Sửa</button>
            </div>
        );

        const htmlControls = this.state.isUpdating ? buttonUpdate : buttonNotUpdate;

        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
                { xhtml }
                <hr/>
                { htmlControls }
            </div>
        );
    }
}

class NoteForm extends React.Component {
  add() {
    const { parent } = this.props;
    const newObj = {
        id: this.refs.txtId.value,
        subject: this.refs.txtSubject.value,
        content: this.refs.txtContent.value,
        important: true
    };
    parent.state.mang.push(newObj);
    parent.setState(parent.state);
  }
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
        <button onClick={this.add.bind(this)}>Add</button>
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

    render() {
        let arrayEle = this.state.mang.map((e, i) => (
            <Note
                index={i}
                subject={e.subject}
                content={e.content}
                important={e.important}
                key={e.id}
                parent={this}
            />
        ));
        return (
            <div>
                { arrayEle }
                <NoteForm parent={this}/>
            </div>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);
