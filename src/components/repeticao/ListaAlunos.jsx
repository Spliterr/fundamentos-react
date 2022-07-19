import alunos from '../../data/alunos'

export default function ListaAlunos() {
  const listaAlunos = alunos.map((aluno) => {
    return <li key={aluno.id}>{aluno.id} - {aluno.nome} - {aluno.nota}</li>
  }) 

  return (
    <div>
      <ul style={{listStyle: 'none'}}>
        {listaAlunos}
      </ul>
    </div>
  )
}