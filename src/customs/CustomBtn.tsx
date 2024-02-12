import React from 'react'

function CustomBtn(props: any) {
    const { type, className, text } = props
    return (
        <>
            <button type={type} className={className}>{text}</button>
        </>
    )
}

export default CustomBtn