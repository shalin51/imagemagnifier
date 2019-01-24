import React, { Component } from "react";
import "./cart.css";

const products=[{
    title:'PRODUCT 1',
    stockStatus:'in stock',
    price:'5.99',
    quantity:'5',
    img_src:'http://lorempixel.com/output/technics-q-c-300-300-4.jpg',
    sku:'QUE-007544-002',
    specialContent:''
},{
    title:'PRODUCT 2',
    stockStatus:'in stock',
    price:'5.99',
    quantity:'5',
    img_src:'http://lorempixel.com/output/technics-q-c-300-300-4.jpg',
    sku:'QUE-007544-002',
    specialContent:'',
},
{
    title:'PRODUCT 3',
    stockStatus:'in stock',
    price:'5.99',
    quantity:'5',
    img_src:'http://lorempixel.com/output/technics-q-c-300-300-4.jpg',
    sku:'QUE-007544-002',
    specialContent:'',
},
{
    title:'PRODUCT 4',
    stockStatus:'in stock',
    price:'5.99',
    quantity:'5',
    img_src:'http://lorempixel.com/output/technics-q-c-300-300-4.jpg',
    sku:'QUE-007544-002',
    specialContent:'Free gift with purchase!, gift wrap, etc!!'
},
]

const priceInfo=[{
    type:"Subtotal",
    price:"35.00"
},{
    type:"Shipping",
    price:"7.99"
},
{
    type:"Tax",
    price:"6.38"
}]
export default class Cart extends Component {

    constructor(props){
        super(props);



    }

  render() {
    return (
      <div className="wrap cf">
        <h1 className="projTitle">
          Responsive Table<span>-Less</span> Shopping Cart
        </h1>
        <div className="heading cf">
          <h1>My Cart</h1>
          <a href="#" className="continue">
            Continue Shopping
          </a>
        </div>
        <div className="cart">        
          <ul className="cartWrap">
           <Products items={products}/>           
          </ul>
        </div>

        <div className="promoCode">
          <label for="promo">Have A Promo Code?</label>
          <input type="text" name="promo" placholder="Enter Code" />
          <a href="#" className="btn" />
        </div>
        <CheckoutTotal priceInfo={priceInfo} total={50.12}/>
 
      </div>
    );
  }
}


const Products=(props)=>{
    if(props.items && props.items.length>0){
        return(
           props.items.map((item,index)=>
           {
            let className="odd"
            if((index+1) %2==0){
                className="even";
            }
            return <Product className={className} {...item}/>
           })       
        )}else{
        return null;
    }
        
}

const Product=(props)=>{
    if(props.title && props.price){
        const {title,price,stockStatus,quantity,img_src,sku,className,specialContent}=props;
        let total=parseFloat(quantity*price).toFixed(2);
        return( <li className={"items "+className}>
        <div className="infoWrap">
          <div className="cartSection">
            <img
              src={img_src}
              alt={title}
              className="itemImg"
            />
            <p className="itemNumber">{sku}</p>
            <h3>{title}</h3>

            <p>
              {" "}
              <input type="text" className="qty" placeholder={quantity} /> x ${price}
            </p>

            <p className="stockStatus"> {stockStatus}</p>
          </div>

          <div className="prodTotal cartSection">
            <p>${total}</p>
          </div>
          <div className="cartSection removeWrap">
            <a href="#" className="remove">
              x
            </a>
          </div>
        </div>
        <SpecialContent specialContent={specialContent}/>       
      </li>)
    }else{

    }
}

const SpecialContent=(props)=>{
    if(props.specialContent && props.specialContent != '' && props.specialContent!= null){
        return( <div className="special">
        <div className="specialContent">
          {
            props.specialContent
          }
        </div>
      </div>
      )
    }else{
        return null;
    }
}
   

const CheckoutTotal=(props)=>(
<div className="subtotal cf">
    <ul>
    {
        props.priceInfo.map(p=>(
            <li className="totalRow">
            <span className="label">{p.type}</span>
            <span className="value">${p.price}</span>
          </li>               
        ))
    }
    <li className="totalRow final">
        <span className="label">Total</span>
        <span className="value">${props.total}</span>
    </li>
    <li className="totalRow">
        <a href="#" className="btn continue">
        Checkout
        </a>
    </li>
    </ul>
</div>)