import React, { useContext } from 'react';
import {MyContext} from '../context/Mycontext';
import { Container, Image } from 'react-bootstrap';

export default function Productdetails(props) {

    const context = useContext(MyContext);
    // console.log("context", context)
  return (

    <div>
        {context && context.items.length > 0 ? (
            context.items.map((item ,index)=>(
                <Container key={index} style={{display:"flex", justifyContent:"space-around"}}>

                    <div style={{width:"30%", height:"auto",alignContent:"center"}}>
                        <Image src={item.image} style={{width:"100%", height:"auto"}}/>
                    </div>

                    <div style={{width:"30%", height:"auto", alignContent:"center"}}>
                        <p style={{fontSize:"18px", fontWeight:"bold"}}>{item.brand}</p>
                        <span style={{fontSize:"14px", fontWeight:"bold"}}>{item.title}</span><br></br>
                        <span style={{fontSize:"14px", fontWeight:"bold"}}>{item.dis}</span><br></br>
                        <hr></hr>
                        <span style={{fontSize:"20px", fontWeight:"bold", margin:"0 5px", color:"black"}}>New Price: <i style={{fontWeight:"normal", color:"rgb(255 193 7)", textShadow:"1px 1px black"}}>${item.price}</i></span>
                        <span style={{fontSize:"16px", margin:"0 60px", color:"black"}}>Old Price: <i style={{fontWeight:"normal", color:"rgb(255 7 7 / 80%)", textDecoration:"line-through rgb(0 0 0 / 50%)"}}>${item.oldprice}</i></span>
                    </div>

                    <div style={{width:"30%", height:"auto",alignContent:"center"}}>
                       <button style={{margin:"10px", width:"100%", backgroundColor:"rgb(255 193 7)"}}>Buy Now</button>
                       <button style={{margin:"10px", width:"100%", backgroundColor:"black", color:"white"}}
                        onClick={()=>context.setItems([...context.items,{image:props.img,
                            title:props.title,
                            brand:props.brand, 
                            dis:props.dis, 
                            price:props.price,
                            oldprice:props.oldprice}])}>Add To Cart</button>
                    </div>
                </Container>
        )
        )):(<p>No Details</p>)}
    </div>
  )
}
