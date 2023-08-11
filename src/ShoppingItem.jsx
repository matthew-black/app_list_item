function ShoppingItem(props) {

  const doStuff = () => {
    console.log(props.item.id)
  }

  console.log('props in ShoppingItem:', props)
  return (
    <li>
      {props.item.name}
      <button onClick={doStuff}>DoStuff!</button>
    </li>
  )
}

export default ShoppingItem
