import React from 'react'
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className='productCard w-[12rem] m-3 transition-all cursor-pointer'>
        {/* image */}
        <div className='h-[14rem]'>
            <img className='h-full w-full object-cover object-left-top ' 
            src='https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSvmd8Ig2O2-XspaQdzrnfBOyKI6Ll_5iB9Jop77zVB6VOqgq0UvGIjNQB7eBHo65MKm0EZU0WcZ6A8LsMXNYEKFPAa7F3xTQlK_Nm7NqPQvi78mFsle3zomw&usqp=CAc'></img>

        </div>
        {/* details */}
        <div className='textPart bg-white text-sm max-w-max p-2'>
            <div> <p className='font-bold opcity-60 w-max pl-2' >Universaloutitc</p>
            <p className=''>Casual Pubt Sleeves Solid Women White Top</p>
            </div>
           {/* price */}
        <div className=' text-sm flex items-center space-x-2'>
            <p className='font-semibold'>Rs 199/-</p>
            <p className='line-through opacity-50'>Rs 1999/-</p>
            <p className='text-green-600 font-semibold'>70% off</p>
        </div>
        </div>
        
    </div>
  )
}

export default ProductCard