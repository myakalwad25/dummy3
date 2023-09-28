import './Product_section.css';
import Product_card from './Product_card';
import { products_list } from './data';

function Product_section() {

    const new_product_list = products_list.filter((product)=>{
        if(product.code === "new_arrival") {
            return product;
        }}).map((product)=>{
        return (
            <Product_card item={product} />
        );
    })

    return (
        <>
        <div className="section_heading">
            <p className="heading">Feature Products</p>
            <p className="subheading">Summer collections New Modern Design</p>
        </div>
        <div className="product_gallery">
            {/* <Product_card product={product} /> */}
            {new_product_list}
        </div>
        </>
        
    );
}

export default Product_section;