import { useEffect, useState } from "react";
import API from "../../utils/API";

function SearchCard(props) {
  const books = props.books;
  let i = -1;

  const handleSave = async ({ target }) => {
    let index = target.dataset.index;
    let book = books[index];
    let body = {
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      yearPublished: book.volumeInfo.publishedDate,
      textSnippet: book.volumeInfo.description,
      pageCount: book.volumeInfo.pageCount,
      link: book.volumeInfo.infoLink,
      image: book.volumeInfo.imageLinks.smallThumbnail,
    };
    await API.saveBook(body);
    document.getElementById("saveMessage").classList.remove("d-none");
    setTimeout(function() {
      document.getElementById("saveMessage").classList.add("d-none");
    },2000)
  };

  return (
    <>
      {books?.map((book) => (
        <div className="row mb-4" key={book.id}>
          <div className="bookCard col-10 m-auto">
            <div className="row titleRow">
              <div className="row">
                <h4 className="text-center">Title: {book.volumeInfo.title}</h4>
              </div>
              <button
                className="btn"
                data-index={(i += 1)}
                onClick={handleSave}
              >
                Save
              </button>
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
                    <span>
                      Author:{" "}
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors[0]
                        : "No authors"}
                    </span>
                  </div>
                  <div className="col">
                    <span>Year published: {book.volumeInfo.publishedDate}</span>
                  </div>
                  <div className="row">
                    <p className="mt-3 mb-0">Text snippet:</p>
                    <p>{book.volumeInfo.description}</p>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <h4 id="saveMessage" className="saveMessage bg-success d-none">Book saved successfully!</h4>
    </>
  );
}

export default SearchCard;
