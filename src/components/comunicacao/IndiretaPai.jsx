import { useState } from "react"
import IndiretaFilho from "./IndiretaFilho"

const IndiretaPai = props => {
  const [nome, setNome] = useState('?')
  const [idade, setIdade] = useState(0)
  const [nerd, setNerd] = useState(false)


  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome,idade,nerd)
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <span>{nome} </span>
      <span>{idade} </span>
      <span>{nerd ? 'Nerd' : 'Não é nerd'} </span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}/>
    </div>
  )
}

export default IndiretaPai