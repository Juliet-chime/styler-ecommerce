import React from 'react'

const Navbar = () => {
    return (
        <div className="sidebar">
            <div><h1>STYLER</h1></div>
            <div>
                <ul>
                   <li><i class="fa fa-bell"></i>&nbsp;&nbsp;New In</li> 
                   <li><i class="fa fa-paperclip"></i>&nbsp;&nbsp;Accesories</li> 
                   <li><i class="fa fa-shopping-bag"></i>&nbsp;&nbsp;Bags</li> 
                   <li><i class="fa fa-paperclip"></i>&nbsp;&nbsp;Tops</li> 
                   <li><i class="fa fa-paperclip"></i>&nbsp;&nbsp;Bottoms</li> 
                   <li><i class="fa fa-paperclip"></i>&nbsp;&nbsp;Dresses</li> 
                   <li><i class="fa fa-paperclip"></i>&nbsp;&nbsp;Jewellery</li> 
                </ul>
            </div>
        </div>
    )
}

export default Navbar
