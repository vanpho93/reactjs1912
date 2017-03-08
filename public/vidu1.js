class Gia extends React.Component {
    render(){
        return <p>{this.props.price}</p>
    }
}

class KhoaHoc extends React.Component {
    show() {
        console.log(this.props.gia);
    }
    render() {
        let { ten, teacher, gia } = this.props;
        return (
            <div>
                <h3>{ten}</h3>
                <p>{teacher}</p>
                <Gia price={gia}/>
                <button onClick={this.show.bind(this)}>Tăng giá</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <KhoaHoc ten="NodeJS" teacher="Khoa Pham" gia="5000" />
        <br/>
        <KhoaHoc ten="ReactJS" teacher="Pho" gia="10000" />
    </div>,
    document.getElementById('root')
);
