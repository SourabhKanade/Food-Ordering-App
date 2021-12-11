import React from 'react';
import style from './AvailableMeal.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  }
];

const AvailableMeal = () => {

  const mealsList = DUMMY_MEALS.map((data) => <MealItem id={data.id} key={data.id} name={data.name} description={data.description} price={data.price} />)
  
  return (
    <>
     <section className={style.meals}>
     <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
    </>
  )
};

export default AvailableMeal;
