import "../css/Header.css"
import headerImg from "../assets/booksyellowsmall.jpg"

function Header(props : any) {
    return(
        <>
        <header>
        <h1>{props.sitename}</h1>
        </header>
        <img src={headerImg} alt="böcker mot gul bakgrund" />
        </>
    )
}

export default Header; 