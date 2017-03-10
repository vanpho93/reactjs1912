//Componen Note -> Ghi chu. Nhan vao 1 props content
//<p>{content}</p>

class Note extends React.Component {
    render() {
        const { children } = this.props;
        return <p>{children}</p>;
    }
}

ReactDOM.render(<Note>Xin chao</Note>, 
    document.getElementById('root'));

