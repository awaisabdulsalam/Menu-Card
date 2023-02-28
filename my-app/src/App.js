import React, { useState } from 'react'; 
import './App.css';
import data from './compoents/data'
import MenuItem from './compoents/MenuItem'
import Categories from './compoents/Categories'

const allCategories = ['all', ...new Set(data.map((saafItem) => saafItem.category))];

const App = () => {
const [items, setItems] = useState(data);
const [categories, setCategories] = useState(allCategories);

const filterItems = (category) => {
  if(category === 'all'){
   setItems(data);
   return;
  }
  const newItems = data.filter((item) => item.category === category)
  setItems(newItems);
} 

  return (
    <main>
      <div>
        <h1>Our Menu</h1>
        <div className='underline'></div>
      </div>
    <Categories filterItems={filterItems} categories={categories} />
    <MenuItem items={items} />
    </main>
  )
}

export default App;
