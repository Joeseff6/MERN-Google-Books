import { useEffect, useState } from "react";
import API from "../../utils/API";

function SavedCard(props) {
  const books = props.userBooks.books;
  const handleDelete = async ({ target }) => {
    let id = target.dataset.id;
    await API.deleteBook(id);
    window.location.pathname = "/saved";
  };
  return (
    <>
      {books?.map((book) => (
        <div className="row mb-4" key={book.title + book.link}>
          <div className="bookCard col-10 m-auto">
            <div className="row titleRow">
              <div className="row">
                <h4 className="text-center">Title: {book.title}</h4>
              </div>
              <button 
              className="btn" 
              data-id={book._id}
              onClick={handleDelete}>
                Delete
              </button>
            </div>
            <div className="row">
              <div className="col-2 partition-left">
                <img className="d-block m-auto my-2" src={book.image} />
              </div>
              <div className="col">
                <div className="row">
                  <div className="col">
                    <span>
                      Author: {book.author ? book.author[0] : "No authors"}
                    </span>
                  </div>
                  <div className="col">
                    <span>Date published: {book.yearPublished}</span>
                  </div>
                  <div className="row">
                    <p className="mt-3 mb-0">Text snippet:</p>
                    <p>{book.textSnippet}</p>
                    <p className="mt-1 mb-0">Link to book/item:</p>
                    <a className="bookInfo" href={book.link}>
                      Google Books: {book.title}
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <p className="mt-2">
                      Page Count: {book.pageCount ? book.pageCount : "N/A"}
                    </p>
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

export default SavedCard;
