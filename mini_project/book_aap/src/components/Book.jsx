import React,{useState} from 'react'
import './book.css'

function Book(props) {
    const [Book,setCount]=useState(0)
    function inc()
    {
        setCount(Book+1)
        
    }
        

    function dec()
    {
        setCount(Book-1)
        
    }





  return (
    <div id="book">
        <img src="https://th.bing.com/th/id/OIP.NtG-Akp1EMn-L86KmCaKzgHaFx?w=218&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="" height={100} width={100}/>
        <h1>Title:{props.title}</h1>
        <h1>{props.price}</h1>
        <div>
            <button onClick={inc}>+</button>
            <span>{Book}</span>
            <button onClick={dec}>-</button>
        </div>
    </div>
  )
}

export default Book