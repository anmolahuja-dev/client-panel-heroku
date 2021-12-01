import React from 'react';
import spin from './spinner.gif';

export default function () {
    return (
        <div>
            <img src={spin} alt="loading..." style={{width:'200px',margin:'auto',display:'block'}} />
        </div>
    )
}
