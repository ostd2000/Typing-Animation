import React, { useState, useEffect, useRef } from "react";

import TypingAnimationSentanceC from "./TypingAnimationSentanceC";

const DIV_1_MIN_X = 0;
const DIV_1_MAX_X = window.innerWidth / 2;
const DIV_1_MIN_Y = 0;
const DIV_1_MAX_Y = window.innerHeight / 2;

const DIV_2_MIN_X = window.innerWidth / 2;
const DIV_2_MAX_X = window.innerWidth;
const DIV_2_MIN_Y = 0;
const DIV_2_MAX_Y = window.innerHeight / 2;

const DIV_3_MIN_X = 0;
const DIV_3_MAX_X = window.innerWidth / 2;
const DIV_3_MIN_Y = window.innerHeight / 2;
const DIV_3_MAX_Y = window.innerHeight;

const DIV_4_MIN_X = window.innerWidth / 2;
const DIV_4_MAX_X = window.innerWidth;
const DIV_4_MIN_Y = window.innerHeight / 2;
const DIV_4_MAX_Y = window.innerHeight;

const OFFSET = 100;

const randNumGenerator = (sentance, lowerBound, upperBound, offset) => {
    let uB = upperBound;
    let lB = lowerBound;

    if (lowerBound === 0) {
        lB += offset;
    } else {
        uB -= offset;
    }

    let randNum = Math.floor(Math.random() * (uB - lB) + lB);

    if (randNum + sentance.length > window.innerWidth) {
        return randNumGenerator(sentance, lowerBound, upperBound, offset);
    }

    return randNum;
};

const TypingAnimationC = ({ content }) => {
    const [sentances, setSentances] = useState([
        content[0][0],
        content[0][1],
        content[0][2],
    ]);
    const [xs, setXs] = useState([
        randNumGenerator(sentances[0], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
        randNumGenerator(sentances[1], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
        randNumGenerator(sentances[2], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
    ]);
    const [ys, setYs] = useState([
        randNumGenerator(sentances[0], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
        randNumGenerator(sentances[1], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
        randNumGenerator(sentances[2], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
    ]);

    const [sentances2, setSentances2] = useState([
        content[1][0],
        content[1][1],
        content[1][2],
    ]);
    const [xs2, setXs2] = useState([
        randNumGenerator(sentances2[0], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
        randNumGenerator(sentances2[1], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
        randNumGenerator(sentances2[2], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
    ]);
    const [ys2, setYs2] = useState([
        randNumGenerator(sentances2[0], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
        randNumGenerator(sentances2[1], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
        randNumGenerator(sentances2[2], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
    ]);

    const [sentances3, setSentances3] = useState([
        content[2][0],
        content[2][1],
        content[2][2],
    ]);

    const [xs3, setXs3] = useState([
        randNumGenerator(sentances3[0], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
        randNumGenerator(sentances3[1], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
        randNumGenerator(sentances3[2], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
    ]);

    const [ys3, setYs3] = useState([
        randNumGenerator(sentances3[0], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
        randNumGenerator(sentances3[1], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
        randNumGenerator(sentances3[2], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
    ]);

    const [sentances4, setSentances4] = useState([
        content[3][0],
        content[3][1],
        content[3][2],
    ]);

    const [xs4, setXs4] = useState([
        randNumGenerator(sentances4[0], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
        randNumGenerator(sentances4[1], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
        randNumGenerator(sentances4[2], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
    ]);

    const [ys4, setYs4] = useState([
        randNumGenerator(sentances4[0], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
        randNumGenerator(sentances4[1], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
        randNumGenerator(sentances4[2], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
    ]);

    const typingAnimationRef = useRef();

    // Initial styling
    useEffect(() => {
        typingAnimationRef.current.width = "100%";
        typingAnimationRef.current.height = "100%";

        typingAnimationRef.current.style.position = "fixed";
        typingAnimationRef.current.style.top = 0;
        typingAnimationRef.current.style.left = 0;

        typingAnimationRef.current.style.zIndex = 100;
    }, []);

    useEffect(() => {
        let i = 3;

        setSentances([content[0][0], content[0][1], content[0][2]]);

        setXs([
            randNumGenerator(content[0][0], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
            randNumGenerator(content[0][1], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
            randNumGenerator(content[0][2], DIV_1_MIN_X, DIV_1_MAX_X, OFFSET),
        ]);

        setYs([
            randNumGenerator(content[0][0], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
            randNumGenerator(content[0][1], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
            randNumGenerator(content[0][2], DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET),
        ]);

        const interval = setInterval(() => {
            if (i < content[0].length - 2) {
                setSentances([
                    content[0][i],
                    content[0][i + 1],
                    content[0][i + 2],
                ]);
                setXs([
                    randNumGenerator(
                        content[0][i],
                        DIV_1_MIN_X,
                        DIV_1_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[0][i + 1],
                        DIV_1_MIN_X,
                        DIV_1_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[0][i + 2],
                        DIV_1_MIN_X,
                        DIV_1_MAX_X,
                        OFFSET
                    ),
                ]);

                setYs([
                    randNumGenerator(
                        content[0][i],
                        DIV_1_MIN_Y,
                        DIV_1_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[0][i + 1],
                        DIV_1_MIN_Y,
                        DIV_1_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[0][i + 2],
                        DIV_1_MIN_Y,
                        DIV_1_MAX_Y,
                        OFFSET
                    ),
                ]);

                i += 3;
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        let i = 3;

        setSentances2([content[1][0], content[1][1], content[1][2]]);
        setXs2([
            randNumGenerator(content[1][0], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
            randNumGenerator(content[1][1], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
            randNumGenerator(content[1][2], DIV_2_MIN_X, DIV_2_MAX_X, OFFSET),
        ]);

        setYs2([
            randNumGenerator(content[1][0], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
            randNumGenerator(content[1][1], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
            randNumGenerator(content[1][2], DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET),
        ]);

        const interval = setInterval(() => {
            if (i < content[1].length - 2) {
                setSentances2([
                    content[1][i],
                    content[1][i + 1],
                    content[1][i + 2],
                ]);
                setXs2([
                    randNumGenerator(
                        content[1][i],
                        DIV_2_MIN_X,
                        DIV_2_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[1][i + 1],
                        DIV_2_MIN_X,
                        DIV_2_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[1][i + 2],
                        DIV_2_MIN_X,
                        DIV_2_MAX_X,
                        OFFSET
                    ),
                ]);

                setYs2([
                    randNumGenerator(
                        content[1][i],
                        DIV_2_MIN_Y,
                        DIV_2_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[1][i + 1],
                        DIV_2_MIN_Y,
                        DIV_2_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[1][i + 2],
                        DIV_2_MIN_Y,
                        DIV_2_MAX_Y,
                        OFFSET
                    ),
                ]);

                i += 3;
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        let i = 3;

        setSentances3([content[2][0], content[2][1], content[2][2]]);
        setXs3([
            randNumGenerator(content[2][0], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
            randNumGenerator(content[2][1], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
            randNumGenerator(content[2][2], DIV_3_MIN_X, DIV_3_MAX_X, OFFSET),
        ]);

        setYs3([
            randNumGenerator(content[2][0], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
            randNumGenerator(content[2][1], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
            randNumGenerator(content[2][2], DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET),
        ]);

        const interval = setInterval(() => {
            if (i < content[2].length - 2) {
                setSentances3([
                    content[2][i],
                    content[2][i + 1],
                    content[2][i + 2],
                ]);
                setXs3([
                    randNumGenerator(
                        content[2][i],
                        DIV_3_MIN_X,
                        DIV_3_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[2][i + 1],
                        DIV_3_MIN_X,
                        DIV_3_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[2][i + 2],
                        DIV_3_MIN_X,
                        DIV_3_MAX_X,
                        OFFSET
                    ),
                ]);

                setYs3([
                    randNumGenerator(
                        content[2][i],
                        DIV_3_MIN_Y,
                        DIV_3_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[2][i + 1],
                        DIV_3_MIN_Y,
                        DIV_3_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[2][i + 2],
                        DIV_3_MIN_Y,
                        DIV_3_MAX_Y,
                        OFFSET
                    ),
                ]);

                i += 3;
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        let i = 3;

        setSentances4([content[3][0], content[3][1], content[3][2]]);
        setXs4([
            randNumGenerator(content[3][0], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
            randNumGenerator(content[3][1], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
            randNumGenerator(content[3][2], DIV_4_MIN_X, DIV_4_MAX_X, OFFSET),
        ]);

        setYs4([
            randNumGenerator(content[3][0], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
            randNumGenerator(content[3][1], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
            randNumGenerator(content[3][2], DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET),
        ]);

        const interval = setInterval(() => {
            if (i < content[3].length - 2) {
                setSentances4([
                    content[3][i],
                    content[3][i + 1],
                    content[3][i + 2],
                ]);
                setXs4([
                    randNumGenerator(
                        content[3][i],
                        DIV_4_MIN_X,
                        DIV_4_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[3][i + 1],
                        DIV_4_MIN_X,
                        DIV_4_MAX_X,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[3][i + 2],
                        DIV_4_MIN_X,
                        DIV_4_MAX_X,
                        OFFSET
                    ),
                ]);

                setYs4([
                    randNumGenerator(
                        content[3][i],
                        DIV_4_MIN_Y,
                        DIV_4_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[3][i + 1],
                        DIV_4_MIN_Y,
                        DIV_4_MAX_Y,
                        OFFSET
                    ),
                    randNumGenerator(
                        content[3][i + 2],
                        DIV_4_MIN_Y,
                        DIV_4_MAX_Y,
                        OFFSET
                    ),
                ]);

                i += 3;
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [content]);

    return (
        <div className="typing-animation-c" ref={typingAnimationRef}>
            {sentances.map((word, idx) => {
                return (
                    <TypingAnimationSentanceC
                        sentance={word}
                        x={`${xs[idx]}px`}
                        y={`${ys[idx]}px`}
                    />
                );
            })}

            {sentances2.map((word, idx) => {
                return (
                    <TypingAnimationSentanceC
                        sentance={word}
                        x={`${xs2[idx]}px`}
                        y={`${ys2[idx]}px`}
                    />
                );
            })}

            {sentances3.map((word, idx) => {
                return (
                    <TypingAnimationSentanceC
                        sentance={word}
                        x={`${xs3[idx]}px`}
                        y={`${ys3[idx]}px`}
                    />
                );
            })}

            {sentances4.map((word, idx) => {
                return (
                    <TypingAnimationSentanceC
                        sentance={word}
                        x={`${xs4[idx]}px`}
                        y={`${ys4[idx]}px`}
                    />
                );
            })}
        </div>
    );
};

export default TypingAnimationC;
