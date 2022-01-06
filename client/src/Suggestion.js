import useStyles from 'substyle'

function Suggestion({ selectSuggestionAsValue, suggestion }) {
  const styles = useStyles(defaultStyles, {})
  return (
    <div {...styles} onClick={() => selectSuggestionAsValue(suggestion.name)}>
      {suggestion.name}
    </div>
  )
}

const defaultStyles = {
  height: 36,
  lineHeight: '36px',
}

export default Suggestion
