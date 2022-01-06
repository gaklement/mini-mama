import Suggestion from './Suggestion'

function Suggestions({ currentItemName, currentList }) {
  const matches = currentList.items.filter((item) =>
    item.name.toLowerCase().startsWith(currentItemName.toLowerCase())
  )

  return (
    <div>
      {matches.map((itemMatch) => (
        <Suggestion key={itemMatch.id} suggestion={itemMatch} />
      ))}
    </div>
  )
}

export default Suggestions
