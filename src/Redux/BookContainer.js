import React from "react";
import { useDispatch,useSelector } from "react-redux";
import Buy_book from "./Bookaction";

function BookContainer() {
  const noOfBooks = useSelector((state) => state.NoOfBooks);
  const dispatch=useDispatch()
  return (
    <>
      <div>BookContainer</div>
      <h2>Number of books: {noOfBooks}</h2>
      <button onClick={() => {dispatch(Buy_book())}}>Buy Book</button>
    </>
  );
}

export default BookContainer;
