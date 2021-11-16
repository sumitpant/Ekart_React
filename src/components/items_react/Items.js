import React ,{useEffect} from 'react'
import Item from '../item-react/Item'

import './Items.css'


const Items = ({products }) => {
  

   
    return (
        <div className="products products_cart">
            {products?.length>0 && products.map(data=>{
                return <Item  key ={data.id} id ={data.id} title ={data.title} price ={data.price} rating={data.rating.rate} image={data.image}  flag ={true} description={data.description} category={data.category}  />;
            })}
        </div>
    )
}

export default Items
