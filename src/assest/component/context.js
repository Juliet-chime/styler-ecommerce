import React, { Component } from 'react'
import { products,productsDetail } from './products'

const ProductContext = React.createContext()
//Provider
//Consumer



class ProductProvider extends Component {
    state = {
        product: products,
        detailproduct:productsDetail
    }

    handleDetail = () => {
        console.log('heloo')
    }

    addToCart = () => {
        console.log('heloo cart')
    }

    render() {
        return (
        <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart
            }}>
        {this.props.children}
        </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}