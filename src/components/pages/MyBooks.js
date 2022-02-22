import { Grid } from '@mui/material';
import React, { useState } from 'react';
import '../../App.css';
import Footer from '../Footer';
import BookCard from './BookCard';
import AddBook from './../AddBook'

//Creating list of games
let books_List = [
  {
      id:0,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOO0MGBPul58TFtiRJZWbpqvRuQxwYGE5cKQ&usqp=CAU",
      book_Name:"Rich dad poor dad",
      author:"Robert kiyosaki",
      location:"Friend"
  },
  {
      id:1,
      img:"https://i2.wp.com/www.onlinebookshop.pk/wp-content/uploads/2020/10/The-Monk-Who-Sold-His-Ferrari-By-Robin-sharma.jpg?fit=1500%2C1150&ssl=1",
      book_Name:"The monk sold his ferrari",
      author:"Robin sharma",
      location:"Home"
  },
  {
    id:2,
    img:"https://www.cbpbook.com/wp-content/uploads/2018/12/the-count-of-monte-cristo-by-alexandre-dumas-jbd-press.jpg",
    book_Name:"The count of monte cristo",
    author:"Alexandre dumas",
    location:"Home"
  },
  {
      id:3,
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403208642i/17472612._UY400_SS400_.jpg",
      book_Name:"mindfulness",
      author:"Gill hasson",
      location:"Home"
  },
  {
    id:4,
    img:"https://2.bp.blogspot.com/6g33bA5wW-1iYK0ciWXuuMRTeTA6aJPmcKGgZFULNEp65mgx4BoxbfFUNWWWf7-iJYVXoJEyVc3T=s1600",
    book_Name:"Spiderman",
    author:"stan lee",
    location:"Home"
  },
  {
    id:5,
    img:"https://kidsbest.co.il/wp-content/uploads/2021/09/perach_lev_hazahav_1.jpg",
    book_Name:"פרח לב זהב",
    author:"שלמה זלמן אריאל",
    location:"Home"
  }
]

//Insert the list to the local storage
localStorage.Books = JSON.stringify(books_List)

export default function MyBooks() {
  if (localStorage.CurrentUser === undefined)
{
   alert('You are not a Logged user! Go home!')
   window.location.href = "/home";
}

  let books = JSON.parse(localStorage.Books)
  let bookToChangeLocation;

  // const [booksList, setBooksList] = useState(books);

  const [booksAtHome, setBooksAtHome] =useState(books.filter((book)=>book.location === "Home"));
  const [booksAtFriend, setBooksAtFriend] =useState(books.filter((book)=>book.location === "Friend"));

  const Change_Location = (id) => {
    console.log(id);
    books.filter((book)=>{if(book.id === id){bookToChangeLocation = book; return}})
    if(bookToChangeLocation.location === "Home")
    {
      bookToChangeLocation.location = "Friend"
      setBooksAtFriend([...booksAtFriend, bookToChangeLocation])
      let new_BookAtHome = booksAtHome.filter((book)=>book.id !== id)
      setBooksAtHome(new_BookAtHome)
    }else{
      bookToChangeLocation.location = "Home"
      setBooksAtHome([...booksAtHome, bookToChangeLocation])
      let new_Books_At_Friend = booksAtFriend.filter((book)=>book.id !== id)
      setBooksAtFriend(new_Books_At_Friend)
    }

    let tempBooksList = books.filter((book)=>book.id !== id)
    let newbooksList = [...tempBooksList, bookToChangeLocation]
    localStorage.Books = JSON.stringify(newbooksList)

    // setBooksAtHome(newbooksList.filter((book)=>book.location === "Home"))
    // setBooksAtFriend(newbooksList.filter((book)=>book.location === "Friend"))
   }

  const Delete_Book = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      let booksAfterDelete =books.filter((book)=>book.id !== id)
      localStorage.Books = JSON.stringify(booksAfterDelete)
      setBooksAtHome(booksAfterDelete.filter((game)=>game.location === "Home"))
      setBooksAtFriend(booksAfterDelete.filter((game)=>game.location === "Friend"))

      alert('Game deleted!');
    } else {return}  }

  const Add_book = (bookName, img, author, location) =>{
    //Checking if one or more of the fields is empty
    if(bookName === null || img === null || author === null || location === null )
      { alert(`One or more fields are missing`); return }
  console.log(bookName, img, author, location);
      //Creating a new game
    let newBook = {
      id:books.length,
      img:img,
      book_Name:bookName,
      author:author,
      location:location
    }

    localStorage.Books = JSON.stringify([...books,newBook])

  //Adding the game to the list it belongs
  location === "Home"
  ?
  setBooksAtHome([...booksAtHome, newBook])
  :
  setBooksAtFriend([...booksAtFriend, newBook])
  alert(`Book added seccessfuly`)
  }

  let home = booksAtHome.map((book)=><BookCard key={book.id} id={book.id} img={book.img} book_Name={book.book_Name} author={book.author} location={book.location} Change_Location={Change_Location} Delete_Book={Delete_Book}/>)
  let friend = booksAtFriend.map((book)=><BookCard key={book.id} id={book.id} img={book.img} book_Name={book.book_Name} author={book.author} location={book.location} Change_Location={Change_Location} Delete_Book={Delete_Book}/>)

  return <div>
           <AddBook Add_book={Add_book}/>
           <h1>My books collection</h1>
           <Grid className='books' style={{justifyContent:'center'}} container>
            {home}
            {friend}
           </Grid>
           <Footer/>
         </div>;
}
