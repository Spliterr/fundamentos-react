const BotoesContador = props => {
  return (
    <div>
        <button onClick={props.inc}>+</button>
        <button onClick={props.dec} style={{ marginLeft: "5px" }}>
          -
        </button>
    </div>
  )
}

export default BotoesContador