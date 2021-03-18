import React, { Component } from 'react'
import TextField from '../components/TextField';
import Accordian from '../components/Accordian';
import IconLabelButtons from '../components/IconLabelButtons';
import TextButton from '../components/TextButton';
import CountrySelect from '../components/CountrySelect';
import '../pages/Checkout.css'

export default class Checkout extends Component {
  shippingInfo = [
    {
      label: 'First Name*'
    },
    {
      label: 'Last Name*'
    },
    {
      label: 'Address*'
    },
    {
      label: ''
    },
    {
      label: 'City*'
    },
    {
      label: 'Zipcode*'
    },
    {
      label: 'State/Province*'
    }
  ];
  
  contactEmail = [
    {
      label: 'Email Address'
    }
  ]

  render() {
    return (
      <div className="checkout-container">
          <div className="shipping-container">
              <div className="checkout-header">
                Checkout
              </div>
              <div className="contact-details-container">
                <div className="contact-header">
                  Contact information
                </div>
                <div className="shipping-details">
                  <div className="shipping-header">
                    Shipping Address
                 </div>
                  {this.shippingInfo.map(field => (
                    <TextField key={field.label} field={field} />
                  ))}
                  <CountrySelect/>
                </div>
            </div>
          </div>
      <div className="checkout-items-container">
          <div className="item-details">
              <div className="items-header">
                Items In Cart({this.props.items.length})
              </div>
              {this.props.items && this.props.items.map((item, index) => (
                  <div className="item-container" key={index}>
                    <div className="image-container">
                      <img 
                        src={`/assets/${item.image}`} 
                        alt="product" 
                        className="aqaba-image" 
                      />
                    </div>
                    <div className="items-added-container">
                      <div className="item-title">
                      {item.title}
                      </div>
                      <div className="item-price">
                        Price: ${item.price}
                      </div>
                      <div className="item-size">
                        Size: {item.size}
                      </div>
                      <div className="item-qty">
                        Qty: {item.qty}
                      </div>
                      <div className="shipping-total">
                        Shipping: FREE
                      </div>
                      <div className="total">
                        TOTAL: $110.00
                      </div>
                      <IconLabelButtons className="remove-item" onClick={() => this.props.onRemoveItemFromCart(index)} />
                    </div>
                </div>
              ))}
              <div className="checkout-button">
                <div>TOTAL:</div>
                <div className="placeOrder-button">
                  <TextButton text='PLACE ORDER'/>
                </div>
              </div>
          </div>
       </div>
     </div>
    )
  }
}
