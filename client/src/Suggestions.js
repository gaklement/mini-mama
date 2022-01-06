function Suggestions({ currentItemName, currentList }) {
  return (
    <div>
      {currentList.items
        .filter((item) => {
          return item.name
            .toLowerCase()
            .startsWith(currentItemName.toLowerCase())
        })
        .map((itemMatch) => {
          return <div key={itemMatch.id}>{itemMatch.name}</div>
        })}
    </div>
  )
}

export default Suggestions
