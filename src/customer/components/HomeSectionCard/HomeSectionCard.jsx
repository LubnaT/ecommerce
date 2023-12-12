import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="flex flex-col w-[15rem] items-center cursor-pointer 
    overflow-hidden bg-white rounded-lg shadow-lg mx-3  border">
      <div className="h-[16rem] w-[14rem] ">
      <img
          className="object-cover object-top w-full h-full "
          src="https://image.made-in-china.com/44f3j00dGKWsJmhKHqA/Organic-Cotton-Twill-Shirt-Men-Clothing-Long-Sleeve-Button-Shirts-for-Men-Camisas-Eco-Friendly-Shirts-Mens-Wear-Casual-Shirts-Sustainable-Shirt.webp"
        ></img>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">Hello</h3>
        <p className="text-sm font-medium text-gray-900">Mens wear clothing</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
