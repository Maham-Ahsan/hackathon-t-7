"use client";
import React, { useEffect, useState } from "react";
import sanityClient from "@sanity/client";
import Image from "next/image";

const sanity = sanityClient({
  projectId: "3s2cgwjr",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-01-01",
});

interface Product {
  ImageUrl: string;
  name: string;
  Brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  Image: {
    asset: {
      _ref: string;
      _type: string;
    };

  };
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "car"] {
          name,
          Brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          tags,
          "ImageUrl": image.asset->_ref
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const truncateDescription = (description: string) => {
      return description.length > 100 ? description.substring(0, 100) + "..." : description;
    }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
       <h2 className="text-center text-slate-800 mt-4 mb-2">
        Products from API's Data
      </h2> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.ImageUrl || "/placeholder.png"}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.Brand}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {truncateDescription(product.type)}
              </p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-slate font-bold">${product.pricePerDay}</p>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs text-black bg-gray-200 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button
                className="mt-4 w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-600"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
 
      {/* Cart Summary */}
     <div className="mt-6 bg-slate-400 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-lg text-red-800 font-black">
          Rental Summery page..
        </h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-gray-600">{item.name}</p>
                  <p className="text-blue-500 text-sm">${item.pricePerDay}</p>
                </div>
                <Image
                  src={item.ImageUrl || "/placeholder.png"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="object-cover rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-black">No items in Rental Summery</p>
        )} 
          </div>
      </div>
  );
};

export default ProductCards;
