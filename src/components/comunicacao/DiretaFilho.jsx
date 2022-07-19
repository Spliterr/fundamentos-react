const DiretaFilho = props => {
  return (
    <div>
      <span>{props.texto} </span>
      <span><strong>{props.numero} </strong></span>
      <span>{props.nerd ? 'Nerd' : 'Não é nerd'}</span>
    </div>
  )
}

export default DiretaFilho