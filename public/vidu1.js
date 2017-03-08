class Gia extends React.Component {
    render(){
        return <p>{this.props.price}</p>
    }
}

class KhoaHoc extends React.Component {
    render() {
        let { ten, teacher } = this.props;
        return (
            <div>
                <h3>{ten}</h3>
                <p>{teacher}</p>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <KhoaHoc ten="NodeJS" teacher="Khoa Pham"/>
        <br/>
        <Gia price="5000"/>
        <KhoaHoc ten="ReactJS" teacher="Pho"/>
    </div>,
    document.getElementById('root')
);
