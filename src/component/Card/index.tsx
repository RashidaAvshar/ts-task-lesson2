import { useState } from 'react';
import { Iproduct } from '../../model';
import { CardProps } from './model';

type CardPropsDetail = {
    data: Iproduct
}

const Card = ({data}: CardPropsDetail) => {
    const [show,setShow] = useState<Boolean>(false)

  return (
   
<div className="flex justify-center">
  <div
    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row mt-3">
    <img
      className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg p-px"
      src={data.image}
      alt="" />
    <div className="flex flex-col justify-start p-6">
      <h5
        className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
        {data.title}
      </h5>
      
      <button onClick={()=>{
        setShow(!show)
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  {!show ? "Show description" : "Hide"}
</button>
      
      {
        show ? 
        <>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {data.description}
      </p>
      <p className="text-green-800 dark:text-neutral-300 text-xl font-medium" >
        {data.price} $
      </p>
        </> : ""
      }
    </div>
  </div>
</div>
  )
}

export default Card;
