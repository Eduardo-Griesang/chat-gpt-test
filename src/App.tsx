import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Form from './components/Form';

function App() {

  const initialData = [
    {id: 1, price: 35, name: "placa", category: "tech", inStock: true},
    {id: 2, price: 50, name: "controle", category: "periférico", inStock: false},
    {id: 3, price: 150, name: "fone", category: "periférico", inStock: true},
    {id: 4, price: 20, name: "teclado", category: "periférico", inStock: true},
    {id: 5, price: 1000, name: "processador", category: "tech", inStock: true},
  ]
  const [data, setData] = useState(initialData)


  let categories:string[] = []

  initialData.forEach((product) => {
    if ( !categories.includes(product.category) ) {
      categories = [...categories, product.category]
    }
  })

  function sortPoducts (e:any) {
    const selected = e.target.value
    let sortedData = [...data]
    if ( selected === "A-Z" ) {
      sortedData.sort((a, b) => a.name.localeCompare(b.name))
    } else if ( selected === "Z-A" ){
      sortedData.sort((a, b) => b.name.localeCompare(a.name))
    } else if ( selected === "Price lowest to highest" ) {
      sortedData.sort((a, b) => a.price - b.price)
    } else if ( selected === "Price highest to lowest" ) {
      sortedData.sort((a, b) => b.price - a.price)
    }

    setData(sortedData)
  }

  function filterProducts (e:any) {
    const selected = e.target.value
    let filter:any = []
    if ( !categories.includes(selected) ){
      setData(initialData)
    } else {
      for ( let i = 0; i < data.length; i++ ){
        if ( data[i].category === selected ) {
          filter = [...filter, data[i]]
        }
      }
      setData(filter)
    }
  }

  return (
    <div className="App">
      <select onChange={(e) => sortPoducts(e)}>
        <option>Sort our products here</option>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>Price lowest to highest</option>
        <option>Price highest to lowest</option>
        <option>Only products in stock</option>
      </select>

      <select onChange={(e) => filterProducts(e)}>
        <option>Filter by category</option>
        {categories.map((cat:string) => {
          return (
            <option>{cat}</option>
          )
        })}
      </select>
      <div className='productWrapper'>
        {data.map((prod, index) => {
          return (
            <Product key={index} data={prod} />
          )
        })}
      </div>
      <section>
        <h3>Add a new product</h3>
        <Form now={data} set={setData} />
      </section>
    </div>
  );
}

export default App;
