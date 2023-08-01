import { useParams } from "react-router-dom"
import BookDetail from "../../components/BookDetail"



const BookDetailPage = () => {

  const { id } = useParams()

  return (
    <>
        <BookDetail id={id} />
    </>
  )
}


export default BookDetailPage