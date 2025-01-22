
interface bookProps {
    title : string, 
    author: string, 
    published: number, 
    read: boolean
}

function Book( {title, author, published, read} : bookProps) {
    return(
        <>
        <article>
        <h2>{title} av {author}</h2>
        <p>Utgiven: {published}</p>
        <p>Läst eller inte: {read? "Ja" : "Nej"}</p> 
        </article>
        </>
    )
}

export default Book; 