import React, { useEffect, useState } from 'react';
import { callingAPI } from '../api/index.js';
import Mycard from './Mycard.jsx';
import Loader from './Loader.jsx';

export default function Home() {

  const [mydata, setData] = useState(null);

  useEffect(() => {
    callingAPI().then((d) => console.log(d));
    callingAPI().then((d) => setData(d));
  }, []);

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {mydata ? mydata.map((e, index) => <Mycard key={index} title={e.title} img={e.image} brand={e.brand} price={e.price} dis={e.description} oldprice={e.oldPrice} />) : <Loader />}
      </div>
    </>
  )
}
