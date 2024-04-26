
import './App.css'
import Table1 from './Table';


function App() {
  const netIncomes = [
    {brand: "McDonalds", income: 1291283}, 
    {brand: "Burger King", income: 1927361}, 
    {brand: "KFC", income: 1098463}
  ];

  const average = (netIncomes.reduce((total, item) => total + item.income, 0) / netIncomes.length).toFixed(2);

  return (
    <>
      <div>
        <Table1 netIncomes={netIncomes} />
        <p>Promedio de ingreso neto: {average}</p>
      </div>
    </>
  )
}

export default App
