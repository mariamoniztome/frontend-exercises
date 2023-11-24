/**
 * This file contains the code for the Grid component, which displays a grid of items.
 * It allows the user to filter the items based on different categories.
 * The component receives an array of items and renders a GridItem component for each item.
 * The items can be filtered based on the selected category using the buttons provided.
 */

import React, { useState } from "react";
import GridItem from "../griditem/GridItem";
import images from "../../assets/img.js";
import "./grid.scss";

const Grid = () => {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Constants for category texts
  const allCategoryText = "Todos";
  const betsCategoryText = "Apostas";
  const casinoCategoryText = "Casino";

  // Array of items
  const items = [
    {
      title: "Oferta Boas-vindas",
      category: "Casino",
      imageSrc: images.imgSrc1,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Oferta de Registo",
      category: "Casino",
      imageSrc: images.imgSrc2,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Torneio Playmatch",
      category: "Bets",
      imageSrc: images.imgSrc3,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Trunfo",
      category: "Casino",
      imageSrc: images.imgSrc4,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Ao Vivo+",
      category: "Bets",
      imageSrc: images.imgSrc5,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Múltipla+",
      category: "Bets",
      imageSrc: images.imgSrc6,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "+Segura",
      category: "Casino",
      imageSrc: images.imgSrc7,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Exclusivos",
      category: "Casino",
      imageSrc: images.imgSrc8,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Power Ods",
      category: "Casino",
      imageSrc: images.imgSrc9,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
  ];
  
  // Function to handle category click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter the items based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="category-buttons">
        {/* Button to select "All" category */}
        <button
        className={`btn btn-terciary ${selectedCategory === 'All' ? 'active' : 'All'}`}
        onClick={() => handleCategoryClick('All')}
      >
        {allCategoryText}
      </button>

        {/* Button to select "Bets" category */}
        <button
        className={`btn btn-terciary ${selectedCategory === 'Bets' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Bets')}
      >
        {betsCategoryText}
      </button>

        {/* Button to select "Casino" category */}
        <button
        className={`btn btn-terciary ${selectedCategory === 'Casino' ? 'active' : ''}`}
        onClick={() => handleCategoryClick('Casino')}
      >
        {casinoCategoryText}
      </button>
      </div>
      <div className="bets-wrapper">
        <div className="container">
          {filteredItems.length === 0 ? (
            <p>No items found for the selected category.</p>
          ) : (
            <div className="row">
              {/* Render GridItem component for each filtered item */}
              {filteredItems.map((item) => (
                <GridItem
                  key={item.title}
                  title={item.title}
                  imageSrc={item.imageSrc}
                  text={item.text}
                  description={item.description}
                  category={item.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Grid;