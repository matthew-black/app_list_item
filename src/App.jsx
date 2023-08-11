import ShoppingList from "./ShoppingList"

let shoppingItems = [
  {
    id: 1,
    name: 'Chips',
  },
  {
    id: 2,
    name: 'Beans'
  },
  {
    id: 3,
    name: 'Guac'
  },
  {
    id: 4,
    name: 'Salsa'
  }
]

function App() {

  return (
    <div>
      <ShoppingList shoppingItems={shoppingItems}/>
    </div>
  )
}

export default App
