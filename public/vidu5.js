//Note 3 props: subject content important <h3> <p> red 
const getClass = isImportant => isImportant ? "red" : "green";
const getHtml = important => important ? null : <button>Xoá</button>;

class Note extends React.Component {
    render() {
        const { subject, content, important } = this.props;
        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
                <p>{content}</p>
                {getHtml(important)}
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
        let arrayEle = this.state.mang.map( e => <Note 
            subject={e.subject}
            content={e.content}
            important={e.important}
        /> );
        return (
            <div>
                { arrayEle }
            </div>
        );
    }
}

ReactDOM.render(
    <List />,
    document.getElementById('root')
);