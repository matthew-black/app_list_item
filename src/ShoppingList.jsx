import ShoppingItem from "./ShoppingItem"

function ShoppingList(props) {
  console.log('props is:', props)
  return (
    <ul>
      {props.shoppingItems.map((item) => {
        return <ShoppingItem key={item.id} item={item} />
      })}
    </ul>
  )
}

export default ShoppingList
