import Footer from "./components/Footer"
import Header from "./components/Header"
import Book from "./components/Book"

let bookArr = [
  {
    title: "Stacken", 
    author: "Annika Norlin", 
    published: 2023, 
    read: true
  }, 
  {
    title: "Everything's fine", 
    author: "Kevin Willson", 
    published: 2020, 
    read: true
  }, 
  {
    title: "Half arse human",  
    author: "Leena Norms", 
    published: 2024, 
    read: false
  }, 
  {
    title: "Carrie Soto is Back", 
    author: "Taylor Jenkins Reid", 
    published: 2023, 
    read: false
  }
]

function App() {

  return (
    <>
    <Header />

    {bookArr.map((book, index) => (
      <Book title={book.title} author={book.author} published={book.published} read={book.read} key={index} />
    ))}
    
    <Footer />
    </>  
  )
}

export default App
