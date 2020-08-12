import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
  <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div> 
  );
};

Food.propTypes = {
  name: PropTypes.string,
  picture: PropTypes.string,
  rating: PropTypes.number
};

const foodILike = [{
  id : 1,
  name: "Kimchi",
  image:
    "https://duckduckgo.com/?q=kimchi&t=ht&iax=images&ia=images&iai=https%3A%2F%2Fwww.maangchi.com%2Fwp-content%2Fuploads%2F2014%2F06%2Fwhole-cabbage-kimchi.jpg",
  rating : 4
},
{
  id : 2,
  name: "ramen",
  image: "https://duckduckgo.com/?q=ramen&t=ht&iar=images&iax=images&ia=images&iai=http%3A%2F%2Fseonkyounglongest.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fshoyu-ramen-1.jpg",
  rating : 3
},
{
  id : 3,
  name: "samgiopsal",
  image: "https://duckduckgo.com/?q=samgiopsal&t=ht&iar=images&iax=images&ia=images&iai=https%3A%2F%2Fwww.gildedgingerbread.com%2Fwp-content%2Fuploads%2F2017%2F08%2FSamgyeopsal-1.jpg"
, rating : 5
}
];

// function App() {
//   return (
//     <div>
//       HELLO!!!!
//       {
//         foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)
//       }
//     </div>
//   );
// }

// export default App; 
