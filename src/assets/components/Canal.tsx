interface Prop {
    src: string;
    id: string;
};

function Canal({ src, id } : Prop) {
    return (
        <>
            <iframe id={id} src={src} width="400px" height="220px"></iframe>
        </>
    );
};

export default Canal;