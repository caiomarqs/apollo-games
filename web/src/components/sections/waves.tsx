import React from 'react'

type WavesProps = {
    inverted?: boolean,
    bg?: string
}

const Waves = (props: WavesProps) => {
    
    let defaultClass = "wave-container"

    if(props.bg){
        defaultClass += ` ${props.bg}`
    }

    if(props.inverted === true){
        defaultClass += " wave-inverted"
    }

    return (
        <>
            <div className={defaultClass}>
                <svg id="wave-down" viewBox="0 0 1537 72" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M-0.00012207 0H1536.5V35.5C1536.5 35.5 1536.5 49 1536.5 56C1536.5 56 1456 72 1328 72C1200 72 1131.5 32 1008 32C884 32 877.5 64 654 64C430.5 64 386.5 32 278 32C169.5 32 64.9999 72 26.4999 72C10.1759 72 2.93057 69.2135 -0.00012207 66.0034C-5.97239e-05 59.5 -0.00012207 56.5 -0.00012207 56.5C-0.00012207 56.5 -0.00012207 14.486 -0.00012207 0Z" />
                </svg>
            </div>
        </>
    )
    
}

export default Waves