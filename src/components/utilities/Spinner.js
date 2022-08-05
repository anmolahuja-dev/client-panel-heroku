import React from 'react';
import spin from './spinner.gif';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
    return (
        <div>
            <img src={spin} alt="loading..." style={{width:'150px',margin:'auto',display:'block'}} />
        </div>
    )
}
