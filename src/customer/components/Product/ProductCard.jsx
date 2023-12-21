import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
    console.log("Items received as prop in card:", product);
     // Check if product is defined before accessing properties
  if (!product || typeof product !== "object") {
    console.error("Invalid product data:", product);
    return null; // or return a placeholder component or message
  }

  const { imageUrl, brand, title ,discountedPrice,price,discountPersent} = product;
  console.log("Image in card:", imageUrl);
  return (
    <div className='productCard w-[12rem] m-3 transition-all cursor-pointer'>
        {/* image */}
        <div className='h-[14rem]'>
        {imageUrl && (
          <img
            className="h-full w-full object-cover object-left-top"
            src={imageUrl}
            alt={title} // add alt attribute for accessibility
          />
        )}
           {console.log("Image after img tag in card:", imageUrl)} 

        </div>
        {/* details */}
        <div className='textPart bg-white text-sm max-w-max p-2'>
            <div> <p className='font-bold opcity-60 w-max pl-2' >
                {brand}
            </p>
            <p className=''>{title}</p>
            </div>
           {/* price */}
        <div className=' text-sm flex items-center space-x-2'>
            <p className='font-semibold'>Rs {discountedPrice}/-</p>
            <p className='line-through opacity-50'>Rs {price}/-</p>
            <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
        </div>
        </div>
        
    </div>
  )
}

export default ProductCard