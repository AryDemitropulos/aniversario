import React from 'react'

export const DateBox = ({ text = "Dias", number = "12" }) => {
    return (
        <div className='date-box-container'>
            <span className='date-box-text'>{text}</span>
            <div className='d-flex-center'>
                {
                    number.split("").map(num =>
                        <div className='date-box-number'>{num}</div>
                    )
                }
            </div>
        </div>
    )
}
