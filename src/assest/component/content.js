import React from 'react'
// import bag from "../img/bag.jpg"
import { products } from './products'

const Content = () => {
  
    return (
        <div className="content">
           <div className="banner">
               {/* <div className="bag-shoe"></div> */}
           </div>
           <div className="intro">
               <p><span className="styler">STYLER CONCEPT</span> is a season-less concept store for fasion , jewellery and accessories. STYLER is focused on promoting slow and sustainable style, hosting a number of new independent designers from across the world who offer made -to-order or small catch production pieces.</p>
           </div>
           <div className="item-holder">
               {products.map(product => (
                   <div className="item" key={product._id}>
                   <div className="bag">
                       <img src={product.image} alt=""/>
                   </div>
                   <div className="displaytext">
                       <div>
                           <h6>Name:&nbsp;{product.title}</h6>
                           {/* <p>Details:{product.description}</p> */}
                           <h6>Price:{product.price}</h6>
                       </div>
                       <div>
                           <button>Add to cart &nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i></button><br/>
                           <button>Shop Now 2</button>
                       </div>
                   </div>
               </div>
               ))}
           </div>
        </div>
    )
}

export default Content
