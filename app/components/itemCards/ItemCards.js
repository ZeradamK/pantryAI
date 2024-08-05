import React, { useEffect, useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import groceriesData from '@/database.json';
import { IoIosSearch } from 'react-icons/io';
import '@/app/components/LandingPage/landing.css';
import wholefood from '@/public/wholefood.png';
import costco from '@/public/costco-logo-png-transparent.png';
import { useRouter } from 'next/router';
import { FaApple, FaGoogle } from 'react-icons/fa';
import logoBg from '@/public/bg-logo.png';
import GroceryCard from '@/app/components/itemCards/groceryCards/GroceryCards';

const ItemCards = ({ handleAdd, handleRemove, totalItems }) => {
  const [searchInput, setSearchInput] = useState('');
  const [filteredGroceries, setFilteredGroceries] = useState([]);

  useEffect(() => {
    if (groceriesData && groceriesData.groceries) {
      setFilteredGroceries(groceriesData.groceries);
    } else {
      console.error('groceriesData.groceries is not defined:', groceriesData);
    }
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchInput(value);
    if (groceriesData && groceriesData.groceries) {
      const filtered = groceriesData.groceries.filter((item) => item.name && item.name.toLowerCase().includes(value));
      setFilteredGroceries(filtered);
    }
  };

  return (
    <div className="main-content flex flex-col">
      <div className="content-main justify-start items-center">
        <div className="banner-section flex flex-row items-center mt-5">
          <div className="store-banner flex flex-row items-center justify-between">
            <div className="store-banner-intro space-y-4">
              <div className="text_1">
                <h1 className="banner-intro">Groceries at your door</h1>
              </div>
              <div className="area-2">
                <div className="download-area justify-start flex flex-row items-center ml-5">
                  <div className="app-store flex flex-row items-center ml-3">
                    <FaApple className="apple-icon" />
                    <p>App store</p>
                  </div>
                  <div className="google-play flex flex-row items-center ml-3">
                    <FaGoogle className="google-icon" />
                    <p>Google play</p>
                  </div>
                </div>
                <div className="text-2 ml-10">
                  <h1 className="banner-intro justify-end">in Minutes.</h1>
                </div>
              </div>
            </div>
            <div className="store-banner-link items-center">
              <Image src={logoBg} alt="bg" className="background-wholefoods items-end mr-5" />
            </div>
          </div>
        </div>
        <div className="content-nav h-30 flex flex-col justify-start items-start ml-36">
          <div className="search flex flex-col items-center relative">
            <input
              type="text"
              id="search-input"
              placeholder="Search"
              className="pl-5 w-96 text-black font-extralight shadow-sm focus:outline-none focus:ring-blue-500 focus:border-transparent"
              value={searchInput}
              onChange={handleSearch}
            />
            <IoIosSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="grocery-list mt-5">
          {filteredGroceries && filteredGroceries.length > 0 ? (
            filteredGroceries.map((item) => (
              <GroceryCard
                key={item.id}
                item={item}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
                totalItems={totalItems}
              />
            ))
          ) : (
            <p>No groceries found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCards;
