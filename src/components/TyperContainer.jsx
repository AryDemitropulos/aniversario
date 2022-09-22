import React, { useEffect, useState } from 'react'
import { Typer } from './Typer'
import { Typewriter } from 'react-simple-typewriter'

export const TyperContainer = ({ text }) => {

    return (
        <div className='typer-container'>
            <Typewriter
                words={text}
                loop={50}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={0}
                delaySpeed={3000}
            />
        </div>
    )
}
