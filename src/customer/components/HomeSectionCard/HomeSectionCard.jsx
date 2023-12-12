import React from "react";

const HomeSectionCard = ({ product }) => {
  console.log("Items received as prop in card:", product);

  // Check if product is defined before accessing properties
  if (!product || typeof product !== "object") {
    console.error("Invalid product data:", product);
    return null; // or return a placeholder component or message
  }

  const { imageUrl, brand, title } = product;

  console.log("Image in card:", imageUrl);

  return (
    <div className="flex flex-col w-[15rem] items-center cursor-pointer 
    overflow-hidden bg-white rounded-lg shadow-lg mx-3  border">
      <div className="h-[16rem] w-[14rem] ">
        {/* Check if imageUrl is defined before using it */}
        {imageUrl && (
          <img
            className="object-cover object-top w-full h-full"
            src={imageUrl}
            alt={title} // add alt attribute for accessibility
          />
        )}
        {console.log("Image after img tag in card:", imageUrl)}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{brand}</h3>
        <p className="text-sm font-medium text-gray-900">{title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;