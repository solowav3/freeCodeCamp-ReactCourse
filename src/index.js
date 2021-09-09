import React from "react";
import ReactDom from "react-dom";

// CSS

import "./index.css";

// setup vars
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg",
    author: "Ann Whitford Paul",
    title: "If Animals Kissed Good Night",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
    author: "James Clear",
    title: "Atomic Habbits",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL200_SR200,200_.jpg",
    author: "Paulo Coelho",
    title: "The Alchemist",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
