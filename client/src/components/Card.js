function Card(props) {
  const books = props.books;

  return (
    <>
      {books?.map((book) => (
        <div className="row mb-4" key={book.id}>
          <div className="bookCard col-10 m-auto">
            <div className="row titleRow">
              <div className="col">
                <h4 className="text-center">{book.volumeInfo.title}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-2 partition-left">
                <img
                  className="d-block m-auto my-2"
                  src={book.volumeInfo.imageLinks?.thumbnail}
                />
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <span>Author: {book.volumeInfo.authors ? book.volumeInfo.authors[0] : "No authors"}</span>
                  </div>
                  <div className="col">
                    <span>Year published: {book.volumeInfo.publishedDate}</span>
                  </div>
                  <div className="row">
                    <p className="mt-3 mb-0">Text snippet:</p>
                    <p>{book.searchInfo.textSnippet}</p>
                    <p className="mt-1 mb-0">Link to book/item:</p>
                    <a className="bookInfo" href={book.volumeInfo.infoLink}>
                      Google Books: {book.volumeInfo.title}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="mt-2">
                      Page Count:{" "}
                      {book.volumeInfo.pageCount
                        ? book.volumeInfo.pageCount
                        : "N/A"}
                    </p>
                  </div>
                  <div className="col">
                    <button className="btn">save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
