import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import {Carousel} from 'react-bootstrap'
import { useStateValue } from '../../StateProvider'

function Home() {

    const [{ products,carousel }] =  useStateValue();

    return (
      
        <div className="home">
        <div className="home__container">


            <Carousel>
            {carousel.map(item =>{
              return <Carousel.Item interval={500}>
              <img
                className="home__image"
                src={item.imageUrl}
                alt=""
              />
            </Carousel.Item>
            })}
            
            

            </Carousel>

       
        <div className="row"> 

        {!products.length && <center><h3>Search Result Not Found</h3></center>}

        
        {products.map(product =>{
         return  <Product
              className="product"
              id={product._id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.imageUrl}
            />
            
        })}

        
          
        </div>


      </div>
      </div>
        
    )
}

export default Home
