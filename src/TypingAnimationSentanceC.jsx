import React, { useState, useEffect, useRef } from "react";

const TypingAnimationSentanceC = ({ sentance, x, y }) => {
    const [char, setChar] = useState("");
    const [emptyCode, setEmptyCode] = useState("");

    const codeRef = useRef();

    useEffect(() => {
        codeRef.current.style.fontSize = "14px";
        codeRef.current.style.background = `linear-gradient(to Right, #537EC5, #602080)`;
        codeRef.current.style.webkitBackgroundClip = "text";
        codeRef.current.style.webkitTextFillColor = "transparent";
    }, []);

    useEffect(() => {
        let i = 1;

        codeRef.current.style.opacity = "100%";

        const interval = setInterval(() => {
            if (codeRef.current.style.opacity < 0) {
                clearInterval(interval);
            }

            codeRef.current.style.opacity = 100 - i + "%";

            i += 0.2;
        }, 10);

        return () => clearInterval(interval);
    }, [sentance]);

    useEffect(() => {
        codeRef.current.style.position = "absolute";
        codeRef.current.style.left = x;
        codeRef.current.style.top = y;
        codeRef.current.style.color = "#537EC5";
    }, [sentance]);

    useEffect(() => {
        setEmptyCode(emptyCode + char);
    }, [char]);

    useEffect(() => {
        setEmptyCode("");

        let i = 0;
        const interval = setInterval(() => {
            if (i < sentance.length) {
                setChar(sentance[i]);

                i++;
            }
        }, 100);

        return () => clearInterval(interval);
    }, [sentance]);

    return <span ref={codeRef}>{emptyCode}</span>;
};

export default TypingAnimationSentanceC;
