const PassoForm = props => {
  return (
    <div>
    <label htmlFor="passoInput">
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={props.setPasso}
      />
    </label>
  </div>
  )
}

export default PassoForm