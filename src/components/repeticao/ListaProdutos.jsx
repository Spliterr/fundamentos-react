import produtos from "../../data/produtos";

export default function ListaProdutos() {
  const listaProdutos = produtos.map((produto) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td><td>{produto.nome}</td><td>{produto.valor}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>{listaProdutos}</tbody>
      </table>
    </div>
  );
}
