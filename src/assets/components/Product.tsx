import { ReactNode } from "react";
import "./Product.css"

interface Prop {
    src: string;
    link: string;
    children: ReactNode;
    type: string;
    ep?: string;
};

function Product({ src, link, children, type, ep } : Prop) {
    return (
        <>
            <div className={type}>
                <div className="product">
                    <img src={src} id={link}/>
                    <p id={ep}>{children}</p>
                </div>
            </div>
        </>
    );
};

export default Product;