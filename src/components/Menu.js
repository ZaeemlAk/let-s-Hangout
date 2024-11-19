import React from 'react';
import './Menu.css'; // Import CSS for styling

// Import your images
import foodImage1 from '../assets/Tandoori Chicken.jpg';
import foodImage2 from '../assets/Chicken Pizza.jpg';
import foodImage3 from '../assets/food1.jpg';
import foodImage4 from '../assets/food2.jpg';
import foodImage5 from '../assets/food3.jpg';
import foodImage6 from '../assets/food4.jpg';
import foodImage7 from '../assets/Food9.jpg'; 
import foodImage8 from '../assets/food10.jpg'; 
import drinkImage1 from '../assets/drink1.jpg';
import drinkImage2 from '../assets/drink2.jpg';
import dessertImage1 from '../assets/dessert1.jpg'; 
import dessertImage2 from '../assets/dessert2.jpg'; 
import shakeImage1 from '../assets/shake1.jpg';
import shakeImage2 from '../assets/shake2.jpg'; 

const Menu = () => {
  const menuItems = [
    {
      type: 'Food',
      items: [
        {
          name: 'Tandoori Chicken',
          image: foodImage1,
          price: '₹450',
          description: 'Premium quality with rich flavors and Fresh Boiler.'
        },
        {
          name: 'Chicken Pizza',
          image: foodImage2,
          price: '₹300',
          description: 'Delicious chicken pizza topped with savory spices and melted cheese.'
        },
        {
          name: 'Spicy Chicken Wings',
          image: foodImage3,
          price: '₹250',
          description: 'Crispy wings with a spicy kick.'
        },
        {
          name: 'Paneer Tikka',
          image: foodImage4,
          price: '₹300',
          description: 'Grilled paneer marinated in spices.'
        },
        {
          name: 'Chilli Potato',
          image: foodImage5,
          price: '₹100',
          description: 'Crispy potato cubes tossed in spicy sauce.'
        },
        {
          name: 'Chicken Noodles',
          image: foodImage6,
          price: '₹160',
          description: 'Stir-fried noodles with tender chicken pieces.'
        },
        {
          name: 'Chicken Nuggets',
          image: foodImage7,
          price: '₹300',
          description: 'Freshly made with crispy Nature.'
        },
        {
          name: 'French Fry',
          image: foodImage8,
          price: '₹100',
          description: 'Deliciously French Fries, fried to perfection.'
        }
      ]
    },
    {
      type: 'Drinks',
      items: [
        {
          name: 'Mojito',
          image: drinkImage1,
          price: '₹90',
          description: 'Refreshing mint and lime drink.'
        },
        {
          name: 'Pina Colada',
          image: drinkImage2,
          price: '₹100',
          description: 'A tropical delight with coconut and pineapple.'
        }
      ]
    },
    {
      type: 'Desserts',
      items: [
        {
          name: 'Rasmalai',
          image: dessertImage1,
          price: '₹200',
          description: 'Soft cheese discs in creamy milk sauce.'
        },
        {
          name: 'Ice-cream',
          image: dessertImage2,
          price: '180',
          description: 'Creamy treat in various delicious flavors..'
        }
      ]
    },
    {
      type: 'Shakes with Ice Cream',
      items: [
        {
          name: 'Chocolate Shake',
          image: shakeImage1,
          price: '₹120',
          description: 'Rich and creamy chocolate shake topped with ice cream.'
        },
        {
          name: 'Strawberry Shake',
          image: shakeImage2,
          price: '₹130',
          description: 'Refreshing strawberry shake with a scoop of vanilla ice cream.'
        }
      ]
    }
  ];

  return (
    <section className="menu-section">
      <h2>Menu</h2>
      <p>At Hangout Hookah Restaurant & Bar, we pride ourselves on delivering an exceptional dining experience with high-quality dishes and premium hookahs. Join us for a delightful atmosphere and unforgettable moments!</p>
      {menuItems.map((category, index) => (
        <div key={index} className="menu-category">
          <h3>{category.type}</h3>
          <div className="menu-items">
            {category.items.map((item, idx) => (
              <div key={idx} className="menu-item">
                <img src={item.image} alt={item.name} className="menu-image" />
                <h4>{item.name}</h4>
                <p className="menu-price">{item.price}</p>
                <p className="menu-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Encouragement Paragraph */}
      <p className="menu-encouragement">
        Explore our diverse range of delicious food, refreshing drinks, and fast food items. We look forward to welcoming you soon!
      </p>
    </section>
  );
};

export default Menu;
