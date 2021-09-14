import React, {Component} from 'react';

class Simpsons extends Component{


    constructor(props){
        super(props);

        this.state = {
            gif: "",
            nombre: ""
        }

    }

    apiCall(url, consecuencia){

        fetch(url)
           .then (response => response.json())
           .then (data => consecuencia(data))
           .catch (error => console.log(error))
    }

    componentDidMount(){

        console.log("Me monte");
        this.traerGifNuevo();
    }

    traerGifNuevo(){

        this.apiCall("https://thesimpsonsquoteapi.glitch.me/quotes?count=1" , this.mostrarGif)
    }
    mostrarGif = (data) => {
        console.log(data[0].image);
        this.setState({

            gif: data[0].image,
            nombre: data[0].character,
            descripcion : data[0].quote

        })
    }

    componentDidUpdate(){

        console.log("Me estoy actualizando");
        //this.apiCall("https://thesimpsonsquoteapi.glitch.me/quotes?count=2", this.mostrarGif)
    }

    aumentarValor(){

        this.setState({
            valor: this.state.valor +1
        })
    }

render(){

    console.log ("Estoy renderizando");

    let contenido ;
    let nombre = this.state.nombre;
    let desc = this.state.descripcion;

    if (this.state.gif == ""){

        contenido = <p>Cargando...</p>
    }else {

        contenido = <img className="foto" src={this.state.gif}></img>
    }
    return(
        <div className="todo">
            <div className="nombre">
            {nombre}
            </div>
            
            <div className="desc">
            {desc}
            </div>
            <div className="fotoPersonaje">
            {contenido}
            </div>
            <div className="boton">
            <button onClick ={() => this.traerGifNuevo()}>Random Gif</button>
            </div>
            
            
            
            
        </div>
    )

}
}
export default Simpsons;

/*git init

git add .

git commit -m "first commit"

git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git

git push -u origin master*/ 