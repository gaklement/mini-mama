function Suggestion({ selectSuggestionAsValue, suggestion }) {
  return (
    <div onClick={() => selectSuggestionAsValue(suggestion.name)}>
      {suggestion.name}
    </div>
  )
}

export default Suggestion
