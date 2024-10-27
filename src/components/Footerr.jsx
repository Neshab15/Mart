import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillShop } from 'react-icons/ai';

export default function Footerr() {
  return (
    <div>
        <Card className="text-center" style={{marginTop:"0px"}}>
      <Card.Header style={{backgroundColor:"rgb(255 193 7)", fontWeight:"bold", fontSize:"18px"}}><AiFillShop size={"25px"}/>L O G O</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        {/* <Button style={{backgroundColor:"rgb(255 193 7)",color:"black", border:"none"}}>Contact</Button> */}
      </Card.Body>
      <Card.Footer style={{backgroundColor:"rgb(255 193 7)", fontWeight:"bold", fontSize:"18px"}}>2 days ago</Card.Footer>
    </Card>
    </div>
  )
}
