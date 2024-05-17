import React from 'react'
import Cards from './Cards'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
function Course() {
  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data)
        setBook(res.data)
      } catch (error) {
        console.log(error)
      }
    };
    getBook();
  },[])
  return (
    <>
    <div className='max-w-screen-2xl container my-0 py-0 mx-auto md:px-20 px-4'>
        <div className='pt-28 text-center item-center justify-center'>
            <h1 className='text-2xl md:text-4xl'>We'r delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
            <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur beatae velit libero eum eaque! Totam porro quam dolores ipsa sequi laborum eaque! Tempore magnam fugiat provident? Asperiores nihil quae tempora.</p>
            <Link to={'/'}>
             <button className='mt-6 bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-300'>Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {book.map((item)=>(
                <Cards key={item.id} item = {item}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default Course