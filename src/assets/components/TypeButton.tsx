import { ReactNode } from "react";
import "./NavButton.css"

interface Prop {
    children: ReactNode;
    onClick?: () => void;
};

function TypeButton({children, onClick} : Prop) {
    return (
        <>
            <button className="navButton" onClick={onClick}>{children}</button>
        </>
    );
};

export default TypeButton;