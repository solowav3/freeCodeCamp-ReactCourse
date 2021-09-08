import React from "react";
import ReactDom from "react-dom";

// CSS

import "./index.css";

// setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81iAADNy2NL._AC_UL200_SR200,200_.jpg",
  author: "James Clear",
  title: "Atomic Habbits",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._AC_UL200_SR200,200_.jpg",
  author: "Paulo Coelho",
  title: "The Alchemist",
};

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
