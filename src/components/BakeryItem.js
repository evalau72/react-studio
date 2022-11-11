import { useState } from 'react';
import "../App.css";

function BakeryItem(props) {
  const [count, setCount] = useState(0)
	
	return (
		<div className='BakeryItem'>
            <h2>{props.name} — {props.price}</h2>
            <img src={props.image} alt="my image" />
            
            {props.description}
            <button onClick={() => {
                props.click(props.price, props.name)
            }}>  Add To Cart </button>
		</div>
	)

}

export default BakeryItem;
