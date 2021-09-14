import React, {Component} from 'react';

class Publicidad extends Component{


    constructor(){
        super();

        this.state ={
            valor: 1,
        }

    }


    aumentarValor(){

        this.setState({
            valor: this.state.valor +1
        })
    }

    decrementarValor(){
        this.setState({

            valor: this.state.valor -1
        })

    }

    



render(){
    return(
        <div>

        <h1>{this.state.valor}</h1>

        <button onClick ={() => this.aumentarValor()}>Aumentar</button> 
        <button onClick ={() => this.decrementarValor()}>Decrementar</button> 
        </div>
        


    )}

}

export default Publicidad;