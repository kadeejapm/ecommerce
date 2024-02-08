import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [products,setProducts] = useState([])


  useEffect(()=>{
    fetchData()
  })


  const fetchData =async ()=>{

    try {
      const response = await axios.get("http://localhost:3000/api/products")
        setProducts(response.data.products)
    } catch (error) {
      
    }
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[90%] m-auto h-[90vh] bg-slate-600 rounded-xl ">
        <div className="mx-10 my-32 flex gap-10 flex-wrap justify-center">
          { products.map((item)=>{
            return(
              <>
              <div className="bg-slate-500 w-[300px] p-7 rounded ">
            <h1 className="text-white ">{item.name}</h1>
            <p className="text-white ">{item.price}</p>
            <p className="text-white ">{item.details}</p>
          </div>
              </>
            )
          }) }
        </div>
      </div>
    </div>
  );
}
