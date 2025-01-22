import "../css/Book.css"

interface bookProps {
    title : string, 
    author: string, 
    published: number, 
    read: boolean
}

function Book( {title, author, published, read} : bookProps) {
    return(
        <>
        <main>
        <article>
        <h2>{title} av {author}</h2>
        <p>Utgiven: {published}</p>
        <p>Läst eller inte: {read? "Ja" : "Nej"}</p> {/*Skriver ut ja/nej beroende på true/false */}
        </article>
        </main>
        </>
    )
}

export default Book; 