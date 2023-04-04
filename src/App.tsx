import Card from "./component/Card";
import React, { useEffect, useState } from 'react';
import { Iproduct } from "./model";
import axios from "axios";

function App() {
  const [product, setProduct] = useState<Iproduct[]>([])
  const [loading, setLoading] = useState<Boolean>(false)

   async function getProducts (){
    try{
      setLoading(true)
        const response = await axios.get(
          "https://fakestoreapi.com/products"
          );
    setProduct(response.data)
    setLoading(false)
    }catch {
        console.log("error")
    }
   }

    useEffect(()=>{
        getProducts()
    }, [])

  return (
    <div className="" >
    {loading ? (
      <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
    ) : (product.map((item)=> {
      return   <Card key={item.id} data={item} />
       }))}
    </div>
  );
}

export default App;

