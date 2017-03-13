//Note 3 props: subject content important <h3> <p> red 

class Note extends React.Component {
    render() {
        const { subject, content, important } = this.props;
        const xhtml = important ? null : <button>Xoá</button>;
        const getClass = isImportant => important ? "red" : "green";
        
        return (
            <div>
                <h3 className={getClass(important)}>{subject}</h3>
                <p>{content}</p>
                {xhtml}
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Note 
            subject="Hoc tap"
            content="Nho lam bai tap ve nha"
            important={false}
        />
        <Note 
            subject="An Choi"
            content="Nho lam bai tap ve nha"
            important={true}
        />
    </div>,
    document.getElementById('root')
);