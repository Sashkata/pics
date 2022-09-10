import React, { useState, useRef, useEffect } from 'react';

export default function ImageCard({ image }) {
    const [spans, setSpans] = useState(0);
    const imageRef = useRef(null);

    useEffect(() => {
        imageRef.current.addEventListener('load', calcSpans());
    }, []);

    const calcSpans = () => {
        const height = imageRef.current.clientHeight;
        const numSpan = Math.ceil(height / 1 + 10);
        setSpans(numSpan);
    };

    return (
        <div style={{ gridRowEnd: `span ${spans}` }}>
            <img
                alt={image.description}
                src={image.urls.regular}
                ref={imageRef}
            />
        </div>
    );
}
