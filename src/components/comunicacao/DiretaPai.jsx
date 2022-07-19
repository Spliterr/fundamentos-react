import DiretaFilho from "./DiretaFilho"

const DiretaPai = props => {
  return (
    <div>
      <DiretaFilho texto="Gabriel" numero={20} nerd={true}/>
      <DiretaFilho texto="Ana" numero={19} nerd={false}/>
    </div>
  )
}

export default DiretaPai