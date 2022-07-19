import { Component } from "react";
import "./Contador.css";
import BotoesContador from "./Botoes";
import DisplayContador from "./Display";
import PassoForm from "./PassoForm";

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (event) => {
    this.setState({
      passo: +event.target.value,
    });
  }

  render() {
    return (
      <div className="Contador">
        <DisplayContador numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <BotoesContador inc={this.inc} dec={this.dec} />
      </div>
    );
  }
}
