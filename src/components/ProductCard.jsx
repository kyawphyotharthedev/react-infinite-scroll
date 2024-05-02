import React from 'react'
import { Badge } from './ui/badge'

const ProductCard = ({data}) => {
   

  return (
    <div className='flex flex-col p-2 relative items-center gap-10 w-[20%] border border-gray-500 shadow-lg rounded-[2rem]'>
      <div className=" absolute top-[-1rem] right-[1rem]">
      <Badge  className="px-6 py-2">
        $ &nbsp;
        {data?.price}
      </Badge>
      </div>
      <img src={data?.images[1]} alt="" className=' size-[300px] mt-5 rounded-[6rem] object-cover' />
      <div className=" flex justify-between gap-5 ">
        <h2 className=" font-semibold text-gray-500">
            {data?.title}
        </h2>
        
      </div>
      <h4 className="  truncate-text">
            {data?.description}
      </h4>
    </div>
  )
}

export default ProductCard
