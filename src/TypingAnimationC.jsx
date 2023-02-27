import React, { useState, useEffect, useRef } from "react";

import TypingAnimationSentanceC from "./TypingAnimationSentanceC";

const OFFSET_X = 50;
const OFFSET_Y = 50;

// For next update: Generate random numbers using normal distribution.
const randNumGenerator = (sentance, lowerBound, upperBound, offset) => {
    let uB = upperBound;
    let lB = lowerBound;

    lB += offset;
    uB -= offset;

    let randNum = Math.floor(Math.random() * (uB - lB) + lB);

    // "... * 3" is for assuming that each character is 3 pixels long.
    if (randNum + sentance.length * 3 > window.innerWidth - offset) {
        return randNumGenerator(sentance, lowerBound, upperBound, offset);
    }

    return randNum;
};

const compareFunc = (a, b) => {
    return b - a;
};

const generateAllPositions = (
    content,
    lowerBoundX,
    upperBoundX,
    offsetX,
    lowerBoundY,
    upperBoundY,
    offsetY
) => {
    let pos = [];
    let x;
    let y;
    let onlyY = [[], []];

    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].length; j++) {
            x = randNumGenerator(
                content[i][j],
                lowerBoundX,
                upperBoundX,
                offsetX
            );
            y = randNumGenerator(
                content[i][j],
                lowerBoundY,
                upperBoundY,
                offsetY
            );

            pos.push([x, y]);
            onlyY[i].push(y);
        }
    }

    onlyY[0].sort(compareFunc);
    onlyY[1].sort(compareFunc);

    for (let i = 0; i < content.length; i++) {
        for (let j = 0; j < content[i].length; j++) {
            if (onlyY[i][j] - onlyY[i][j + 1] < 15) {
                return generateAllPositions(
                    content,
                    lowerBoundX,
                    upperBoundX,
                    offsetX,
                    lowerBoundY,
                    upperBoundY,
                    offsetY
                );
            }
        }
    }

    return pos;
};

const TypingAnimationC = ({ content }) => {
    const [sentances, setSentances] = useState([], []);
    const [pos, setPos] = useState([], []);

    const [sentances2, setSentances2] = useState([]);
    const [pos2, setPos2] = useState([]);

    const typingAnimationRef = useRef();

    // Initial styling
    useEffect(() => {
        typingAnimationRef.current.style.width = "100%";
        typingAnimationRef.current.style.height = "100%";
        typingAnimationRef.current.style.position = "fixed";
        typingAnimationRef.current.style.top = 0;
        typingAnimationRef.current.style.left = 0;
        typingAnimationRef.current.style.zIndex = 100;
    }, []);

    useEffect(() => {
        let p = generateAllPositions(
            content,
            0,
            window.innerWidth,
            OFFSET_X,
            0,
            window.innerHeight,
            OFFSET_Y
        );

        setSentances(content[0]);
        setPos(p.slice(0, 20 / 2));

        setTimeout(() => {
            setSentances2(content[1]);
            setPos2(p.slice(10, 20));
        }, 1000);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSentances([...content[0]]);

            let p = generateAllPositions(
                content,
                0,
                window.innerWidth,
                OFFSET_X,
                0,
                window.innerHeight,
                OFFSET_Y
            );

            setPos([...p.slice(0, 20 / 2)]);

            setTimeout(() => {
                setSentances2([...content[1]]);
                setPos2([...p.slice(0, 20 / 2)]);
            }, 1000);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="typing-animation-c" ref={typingAnimationRef}>
            {pos[0] &&
                sentances.map((sentance, idx) => {
                    return (
                        <TypingAnimationSentanceC
                            sentance={sentance}
                            x={`${pos[idx][0]}px`}
                            y={`${pos[idx][1]}px`}
                            //
                            key={idx}
                        />
                    );
                })}

            {pos2[0] &&
                sentances2.map((sentance, idx) => {
                    return (
                        <TypingAnimationSentanceC
                            sentance={sentance}
                            x={`${pos2[idx][0]}px`}
                            y={`${pos2[idx][1]}px`}
                            //
                            key={idx}
                        />
                    );
                })}
        </div>
    );
};

export default TypingAnimationC;
