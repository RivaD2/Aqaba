import React from 'react'
import TextButton from '../components/TextButton';
import IconLabelButtons from '../components/IconLabelButtons';
import '../modals/CartModal.css';

const CartModal = props => {
  console.log('cart has items', props.items);
  // map over props.items
  
  return (
    <div className="cart-container">
      <div className="cart-item-count">
          CART ({props.items.length})
      </div>
          {props.items.map(item => (
      <div className="perfume-card">
        <div className="cart-image">
          <img src={`/assets/${item.image}`} className="aqaba-image" alt="product"></img>
        </div>
        <div className="cart-details">
            <div className="product-title">
            {item.title}
          </div>
          <div className="product-price">
          </div>
          <div ClassName="product-size-selected">
            SIZE
          </div>
          <div className="qty">
            {/* use SimpleSelect component with props so I can input qty and size depending */}
            QTY: 
          </div>
            <IconLabelButtons/>
        </div>
      </div>
        ))}
      <div className="edit-and-checkout">
        <TextButton className="edit-cart" text='EDIT CART'></TextButton>
        <TextButton className="checkout" text='CHECKOUT'></TextButton>
      </div>
    </div>
  )
}

export default CartModal;
