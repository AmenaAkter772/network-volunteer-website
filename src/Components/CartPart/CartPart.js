import React from 'react';
import { useHistory } from 'react-router-dom';
import './CartPart.css'


const CartPart = (props) => {
    const {image, id, title} = props.volunteer
    const history = useHistory();

  function handleClick() {
    history.push(`/about/${id}`);
  }
    return (
        <div onClick= {handleClick} className="cartStyle" style={{backgroundImage:`url(${image})`}}>
            <h4 className="textStyle">{title}</h4>
        </div>
    );
};

export default CartPart;