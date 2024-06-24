import { ReactNode } from "react";
import "./NavButton.css"

interface Prop {
    children: ReactNode;
    // style: CSSProperties;
    onClick?: () => void;
};

function NavButton({children, /*style,*/ onClick} : Prop) {
    return (
        <>
            <button className="navButton" onClick={onClick} /*style={style}*/>{children}</button>
        </>
    );
};

export default NavButton;