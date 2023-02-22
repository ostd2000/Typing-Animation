import React, { useState, useEffect } from "react";

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

    if (lowerBound == 0) {
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

const TypingAnimationBackgroundC = ({ content }) => {
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

    // const [word, setWord] = useState(content[0][0]);
    // const [x, setX] = useState(
    //     randNumGenerator(word, DIV_1_MIN_X, DIV_1_MAX_X, OFFSET)
    // );
    // const [y, setY] = useState(
    //     randNumGenerator(word, DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET)
    // );

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

    // const [word2, setWord2] = useState(content[1][0]);
    // const [x2, setX2] = useState(
    //     randNumGenerator(word2, DIV_2_MIN_X, DIV_2_MAX_X, OFFSET)
    // );
    // const [y2, setY2] = useState(
    //     randNumGenerator(word2, DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET)
    // );

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

    // const [word3, setWord3] = useState(content[2][0]);
    // const [x3, setX3] = useState(
    //     randNumGenerator(word3, DIV_3_MIN_X, DIV_3_MAX_X, OFFSET)
    // );
    // const [y3, setY3] = useState(
    //     randNumGenerator(word3, DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET)
    // );

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
    // const [word4, setWord4] = useState(content[2][0]);
    // const [x4, setX4] = useState(
    //     randNumGenerator(word4, DIV_4_MIN_X, DIV_4_MAX_X, OFFSET)
    // );
    // const [y4, setY4] = useState(
    //     randNumGenerator(word4, DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET)
    // );

    useEffect(() => {
        let i = 3;

        const interval = setInterval(() => {
            if (i < content[0].length - 2) {
                // setWord(content[0][i]);
                // setX(randNumGenerator(word, DIV_1_MIN_X, DIV_1_MAX_X, OFFSET));
                // setY(randNumGenerator(word, DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET));

                sentances([
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

        const interval = setInterval(() => {
            if (i < content[1].length - 2) {
                // setWord(content[0][i]);
                // setX(randNumGenerator(word, DIV_1_MIN_X, DIV_1_MAX_X, OFFSET));
                // setY(randNumGenerator(word, DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET));

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

        const interval = setInterval(() => {
            if (i < content[2].length - 2) {
                // setWord(content[0][i]);
                // setX(randNumGenerator(word, DIV_1_MIN_X, DIV_1_MAX_X, OFFSET));
                // setY(randNumGenerator(word, DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET));

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
        }, 5000);

        return () => clearInterval(interval);
    }, [content]);

    useEffect(() => {
        let i = 3;

        const interval = setInterval(() => {
            if (i < content[3].length - 2) {
                // setWord(content[0][i]);
                // setX(randNumGenerator(word, DIV_1_MIN_X, DIV_1_MAX_X, OFFSET));
                // setY(randNumGenerator(word, DIV_1_MIN_Y, DIV_1_MAX_Y, OFFSET));

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
        }, 4000);

        return () => clearInterval(interval);
    }, [content]);

    // useEffect(() => {
    //     let i = 1;

    //     const interval = setInterval(() => {
    //         if (i < content[1].length) {
    //             setWord2(content[1][i]);
    //             setX2(
    //                 randNumGenerator(word2, DIV_2_MIN_X, DIV_2_MAX_X, OFFSET)
    //             );
    //             setY2(
    //                 randNumGenerator(word2, DIV_2_MIN_Y, DIV_2_MAX_Y, OFFSET)
    //             );

    //             i++;
    //         }
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     let i = 1;

    //     const interval = setInterval(() => {
    //         if (i < content[2].length) {
    //             setWord3(content[2][i]);
    //             setX3(
    //                 randNumGenerator(word3, DIV_3_MIN_X, DIV_3_MAX_X, OFFSET)
    //             );
    //             setY3(
    //                 randNumGenerator(word3, DIV_3_MIN_Y, DIV_3_MAX_Y, OFFSET)
    //             );

    //             i++;
    //         }
    //     }, 7000);

    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     let i = 1;

    //     const interval = setInterval(() => {
    //         if (i < content[0].length) {
    //             setWord4(content[0][i]);
    //             setX4(
    //                 randNumGenerator(word4, DIV_4_MIN_X, DIV_4_MAX_X, OFFSET)
    //             );
    //             setY4(
    //                 randNumGenerator(word4, DIV_4_MIN_Y, DIV_4_MAX_Y, OFFSET)
    //             );

    //             i++;
    //         }
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div>
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

            {/* <TypingCodeAnimation code={word} x={`${x}px`} y={`${y}px`} /> */}
            {/* <TypingCodeAnimation code={word2} x={`${x2}px`} y={`${y2}px`} /> */}
            {/* <TypingCodeAnimation code={word3} x={`${x3}px`} y={`${y3}px`} /> */}
            {/* <TypingCodeAnimation code={word4} x={`${x4}px`} y={`${y4}px`} /> */}

            {/* {content.map((element, idx) => {
                let x = Math.floor(Math.random() * 200 + 100);
                let y = Math.floor(Math.random() * 200 + 100);

                return (
                    <TypingCodeAnimation
                        key={idx}
                        code={element}
                        x={`${x}px`}
                        y={`${y}px`}
                    />
                );
            })} */}
        </div>
    );
};

export default TypingAnimationBackgroundC;
