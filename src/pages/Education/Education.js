import React, { useState, useEffect } from "react";
import "./Education.css";

import SearchBar from "./SearchBar/SearchBar";
import Recommended from "./Recommended/Recommended";
import Services from "./Services/Services";


import axios from "axios";
import CourseCard from "../../components/CoursCard/CoursCard";

export default function Education() {
  const [all_product, setall_product] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setall_product(response.data);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };



  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(all_product, selected, query) {
    let filteredProducts = all_product;

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category,  name }) =>
            category === selected ||
            name === selected
        );
      }
   

    return filteredProducts.map((product) => (
      <CourseCard
        key={product._id}
        id={product._id}
        image={product.image}
        name={product.name}
        category={product.category}
        new_price={product.price}
      />
    ));

  }

  const result = filteredData(all_product, selectedCategory, query);
  return (
    <div>
    
      <SearchBar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Services result={result} />
    </div>
  );
}
