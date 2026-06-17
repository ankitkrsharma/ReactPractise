import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { purchase_book, add_book } from './BookAction'

export default function BookContainer() {

  const numOfBooks = useSelector(state => state.numOfBooks)
  const bookName = useSelector(state => state.bookName)

  const d = useDispatch()

  const [count, setCount] = useState('')

  return (
    <div>
      <h1>Book Container : {bookName}</h1>

      <h2>Number of Books : {numOfBooks}</h2>

      <button onClick={() => d(purchase_book())}>
        Buy Book
      </button>



      <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />

      <button onClick={() => d(add_book(count))}>
        Add Books
      </button>
    </div>
  )
}