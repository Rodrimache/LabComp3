
import Table from 'react-bootstrap/Table';

const Table1 = ({netIncomes}) => {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>Marca</th>
          <th>Ingreso Neto</th>
        </tr>
      </thead>
      <tbody>
        {netIncomes.map((item, index) => (
          <tr key={index}>
            <td>{item.brand}</td>
            <td>{item.income}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table1;
