import React from 'react';
import Banner from './Banner';

function TiraBanner(){
    return (
        <div>
            <Banner
                mensaje = "este es un mensaje cualquiera"
                
            />
            <Banner/>
            <Banner/>
            <Banner/>
        </div>
    )
}
export default TiraBanner;