import React from 'react';

function Banner(props){

    let rating = 5.8;
    let categorias= ["Accion" , "Aventura"];
    return (
        <section className="banner">
            <h1 className="titulo">Tenemos lo mejor para ti...</h1>
            <h2>rating: {rating}</h2>
            <h3>categoria:{categorias.map(categoria => <li> {categoria} </li>  )}</h3>
            <h4>Mensaje adjunto: {props.mensaje}</h4>
            <h5>props.children</h5>
        </section>
    )
}
{

    Banner.defaultProps = {
        mensaje: "Mensaje predefinido"
    }
}
export default Banner;