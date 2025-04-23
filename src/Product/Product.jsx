import image from "/images/image-product-desktop.jpg"
import imageMobile from "/images/image-product-mobile.jpg"
import cart from "/images/icon-cart.svg"
import ProductCSS from "./Product.module.css"

function Product(){
    return(
        <div className={ProductCSS.productCardContainer}>
            <div className={ProductCSS.productImage}> 
                <picture>
                    <source media="(max-width: 599px)" srcSet={imageMobile}/>
                    <img src={image}/>
                </picture>
            </div>
            
            <div className={ProductCSS.productText}>
                <h3 className={ProductCSS.perfumeHeader3}>PERFUME</h3>
                <h1>Gabrielle Essence Eau De Parfum</h1>
                <p>A floral, solar and voluptuous interpretation composed by Olivier Polge,
                    Perfume-Creator for the house of CHANEL.
                </p>
                <div className={ProductCSS.price}>
                    <h2 className={ProductCSS.discountPrice}>$149.99</h2>
                    <h4 className={ProductCSS.originalPrice}>$169.99</h4>
                </div>
                <button><span><img src={cart}></img></span>Add to cart</button>
            </div>            
        </div>
    );
}

export default Product
