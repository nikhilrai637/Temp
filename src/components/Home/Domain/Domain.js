import React from 'react'
import ML from './ML/ML'
import DS_ALGO from './DS_ALGO/DS_ALGO'
import CYBERSECURITY from './CYBERSECURITY/CYBERSECURITY'
import CS from './CS/CS'
import AI from './AI/AI'
import WebDev from './WebDev/WebDev'

function Domain() {
    return (
        <div>
            Domain
            <ML/>
            <DS_ALGO/>
            <CYBERSECURITY/>
            <CS/>
            <AI/>
            <WebDev/>
        </div>
    )
}

export default Domain
