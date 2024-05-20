import { ReactNode } from "react";
import "./Product.css"

interface Prop {
    src: string;
    link: string;
    children: ReactNode;
    type: string;
};

function Product({ src, link, children, type } : Prop) {
    return (
        <>
            <div className={type}>
                <div className="product">
                    <a href={link}>
                        <img src={src}/>
                        <p>{children}</p>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Product;