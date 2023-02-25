import { Link } from "react-router-dom";


export default function Nav() {
    let styles = {
        display:'flex',
        justifyContent:'space-around',
        minHeight:'100px',
        width:'100%',
        backgroundColor:'#f9e9d6'

    }
    return (
        <div className="body" style={styles}>
            <Link to="/">Main</Link>
            <Link to='design'>Design Board</Link>
        </div>
    )
}