import React, { useEffect, useState } from 'react'

export const Typer = ({ text = "", delay = 0.035, onFinishText }) => {

    const [typed, setTyped] = useState("")
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => {
                if (c > text.length) return c;
                const newC = c + 1;
                type(newC);
                return newC;
            })
        }, delay * 1000);

        return () => { clearInterval(interval) }

    }, [text])

    const type = (position) => {
        if (position <= text.length) {
            setTyped(text.slice(0, position));
        } else {
            onFinishText()
        }

    }

    return (
        <>
            <div>{typed}</div>
        </>

    )
}
