import { ReactNode } from "react";
import "./Product.css"
interface Prop {
    src: string;
    link?: string;
    children: ReactNode;
    type: string;
    id?: string;
};

function Product({ src, link, children, type, id } : Prop) {
    return (
        <>
            <div className={type}>
                <div className="product">
                    <img src={src} id={link} className={id}/>
                    <p>{children}</p>
                </div>
            </div>
        </>
    );
};
export default Product;