import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card"
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaProdutos from "./components/repeticao/ListaProdutos";
import DiretaPai from "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import './App.css'

const App = () => {
  return (
<div className="app">

    <h1>Fundamentos React</h1>

    <div className="cards" color="#00C">
      <Card titulo="Contador">
        <Contador numeroInicial={10}></Contador>
      </Card>

      <Card titulo="Comunicacao Indireta" >
        <Input></Input>
      </Card>

      <Card titulo="Comunicacao Indireta" >
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="Comunicacao direta" >
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="Repetição de produtos" >
        <ListaProdutos></ListaProdutos>
      </Card>

      <Card titulo="Repetição de alunos">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="Card 5" color="#990">
        <Familia sobrenome="Diniz">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="Número aleatorio" color="#0F0">
        <Aleatorio
        min={0}
        max={100} />
      </Card>

      <Card titulo="Primeiro componente" color="#910">
        <Primeiro />
      </Card>

      <Card titulo="Segundo componente" color="#009">
        <ComParametro titulo="Segundo componente" subtitulo="Muito legal!!!" />
      </Card>

      <Card titulo="Segundo componente" color="#079">
        <ComParametro titulo="Terceiro" subtitulo="Criança colorindo" />
      </Card>
    </div>
</div>
  )
}

export default App