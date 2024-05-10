import { ReactNode } from "react";
import "./ExternalLink.css"

interface Prop {
    href: string;
    children: ReactNode;
}

function ExternalLink({href, children} : Prop) {
    return (
        <>
            <a className="external-link" href={href}>{children}</a>
        </>
    );
};

export default ExternalLink;