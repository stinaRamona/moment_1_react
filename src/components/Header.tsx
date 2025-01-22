import "../css/Header.css"
import headerImg from "../assets/booksyellowsmall.jpg"

function Header() {
    return(
        <>
        <header>
        <h1>Min bokhylla</h1>
        </header>
        <img src={headerImg} alt="böcker mot gul bakgrund" />
        </>
    )
}

export default Header; 