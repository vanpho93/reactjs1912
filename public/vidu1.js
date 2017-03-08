class KhoaHoc extends React.Component {
    render() {
        return <a href="http://khoapham.vn">KhoaPham</a>;
    }
}

ReactDOM.render(
    <div>
        <KhoaHoc />
        <br/>
        <KhoaHoc />
    </div>,
    document.getElementById('root')
);
