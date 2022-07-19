import { useState } from "react";
import "./Input.css"

const Input = (props) => {
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    setValor(e.target.value)
  }
  return (
  <div>
    <h2>{valor}</h2>
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
    <input className="input" value={valor} onChange={quandoMudar}/>
    <input className="input" value={valor} readOnly/>
    <input className="input" value={undefined} />
    </div>
  </div>
  )
};

export default Input;
