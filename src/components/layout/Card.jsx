import "./Card.css"

export default function Card(props) {
  console.log(props)
  const bgColor = {
    backgroundColor: props.color || '#F00',
    borderColor: props.color || '#F00',
  }

  return (
    <div className="card" style={bgColor}>
      <div className="title">{props.titulo}</div>
      <div className="content">{props.children}</div>
    </div>
  );
}
