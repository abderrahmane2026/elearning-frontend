import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceControl = () => {
  const [products, setProducts] = useState([]);
 
  

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/delete/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <h1>All Services</h1>
      {products.length === 0 ? (
        <p>No services found.</p>
      ) : (
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
              <th className="py-3 px-6">Id</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">image</th>
                <th className="py-3 px-6">Price</th>
               
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">State</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {products.map((product,index) => (
                <tr key={product._id}>

                  <td className="px-6 py-4 whitespace-nowrap">{index+1}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap"><img src={product.image} style={{width:"40px"}}></img></td>

                  <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                 
                  <td className="px-6 py-4 whitespace-nowrap">{product.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ServiceControl;
