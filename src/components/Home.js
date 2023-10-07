import Hero from "./Hero";
import Features from "./features";
import Product_section from "./Product_section";
import imgn from './Images/products/n3.jpg';

export default function Home() {
    return (
        <>
            <Hero/>
            <Features/>
            <Product_section/>
            <div>
                <img src={imgn} alt />
            </div>
        </>
    );
}