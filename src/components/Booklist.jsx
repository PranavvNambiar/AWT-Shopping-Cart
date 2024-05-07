import React from 'react';

const books = [
    {
      "id": 1,
      "title": "The Enigmatic Odyssey",
      "author": "Elena Rodriguez",
      "date": "2023-05-12",
      "imgsrc": "https://m.media-amazon.com/images/I/41D16fT6BIL._SY445_SX342_.jpg"
    },
    {
      "id": 2,
      "title": "Whispers of the Cosmos",
      "author": "Jonathan Barnes",
      "date": "2022-09-28",
      "imgsrc": "https://m.media-amazon.com/images/I/51F4+ArIBpL._SY445_SX342_.jpg"
    },
    {
      "id": 3,
      "title": "Serenade for the Stars",
      "author": "Megan Turner",
      "date": "2024-01-05",
      "imgsrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRxCT6rTxro97xS8qo6EAL9fIGHKnHT4SrP3B1s9jTKrXTlfjsdjzWEalBoSWegBKqQeE&usqp=CAU"
    },
    {
      "id": 4,
      "title": "Chronicles of Eternity",
      "author": "Alexander Greene",
      "date": "2023-11-18",
      "imgsrc": "https://m.media-amazon.com/images/I/51hhYhvbNqL.jpg"
    },
    {
      "id": 5,
      "title": "Lost in the Labyrinth",
      "author": "Sophia Mitchell",
      "date": "2022-12-09",
      "imgsrc": "https://m.media-amazon.com/images/I/51qEpMxM7QL._SY425_.jpg"
    }
]
  
export const Img = (props) => {
    return (<img src={props.img} alt="BOOK"></img>);
  }
export const Author = (props) => {
    return (
      <>
        <p>Book: {(props.book).toUpperCase()}</p>
        <p>Author: {props.author}</p>
        <p>Publication Date: {props.date}</p>
      </>
    )
  }
export const Book = (props) => {
    return (
      <article className="Book" style={{ border: '2px solid black', padding: '10px' }}>
        <div>
          <Img img={props.img} />
          <Author author={props.author} date={props.date} book={props.book} />
          <p>Quantity: <input type='number' min={1}></input></p>
          <button style={{}}>Buy Book</button>
        </div>
      </article>
    )
  }
const Booklist = () => {
    return (
      <section className='Book1'>
        {
          books.map((b) => {
            return (<Book book={b.title} author={b.author} date={b.date} img={b.imgsrc} />)
          })}
      </section>
    );
  }
  
export default Booklist;
