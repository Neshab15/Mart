import React, { useContext } from 'react';
import { MyContext } from '../context/Mycontext';
import { Navigate, useNavigate } from 'react-router-dom';


export default function Mycard(props) {

  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleClick = ()=>{
    context.setItems([...context.items,{image:props.img,
       title:props.title,
      brand:props.brand, 
      dis:props.dis, 
      price:props.price,
      oldprice:props.oldprice
    }]);
    navigate(`/productdetails`);
  }

  return (
        <div style={{boxShadow: "rgba(0, 0, 0, 0.10) 1px 1px 2px", margin:"20px 0", width:"280px", height:"auto", cursor:"pointer", }} onClick={handleClick}>
            <img src={props.img} style={{width:"90%", height:"auto"}}></img>
            <p style={{fontSize:"18px", fontWeight:"bold", margin:"5px 5px"}}>{props.brand}</p>
            <span style={{fontSize:"21px",fontWeight:"bold", margin:"3px 5px"}}>{props.title.slice(0,19)}...</span><br></br>
            <span style={{fontSize:"16px", fontWeight:"bold", margin:"0 5px", color:"black"}}>Price: <i style={{fontWeight:"normal", color:"rgb(255 193 7)", textShadow:"1px 1px black"}}>${props.price}</i></span>
        </div>      
  )
}
