interface Prop {
    src: string;
};

function Canal({ src } : Prop) {
    return (
        <>
            <iframe src={src} width="400px" height="220px"></iframe>
        </>
    );
};

export default Canal;