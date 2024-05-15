import { ReactNode } from "react";
import "./Product.css"

interface Prop {
    src: string;
    link: string;
    children: ReactNode;
};

function Product({ src, link, children } : Prop) {
    return (
        <>
            <div className="product">
                <a href={link}>
                    <img src={src}/>
                    <p>{children}</p>
                </a>
            </div>
        </>
    );
};

export default Product;