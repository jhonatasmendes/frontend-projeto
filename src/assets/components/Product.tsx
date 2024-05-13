import { ReactNode } from "react";
import "./Product.css"

interface Prop {
    src: string;
    children: ReactNode;
};

function Product({ src, children } : Prop) {
    return (
        <>
            <div className="product">
                <img src={src}/>
                <p>{children}</p>
            </div>
        </>
    );
};

export default Product;