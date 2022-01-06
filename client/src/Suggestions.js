import Divider from './Divider'
import Suggestion from './Suggestion'
import colors from './colors'
import useStyles from 'substyle'

function Suggestions({
  currentItemName,
  currentList,
  selectSuggestionAsValue,
}) {
  const styles = useStyles(defaultStyles, {})
  const matches = currentList.items.filter((item) =>
    item.name.toLowerCase().startsWith(currentItemName.toLowerCase())
  )

  return (
    <div {...styles}>
      {matches.map((itemMatch, index) => (
        <div key={itemMatch.id}>
          <Suggestion
            selectSuggestionAsValue={selectSuggestionAsValue}
            suggestion={itemMatch}
          />
          {index !== matches.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  )
}

const defaultStyles = {
  backgroundColor: colors.lightgrey,
  borderRadius: '0px 0px 3px 3px',
  color: colors.greyDark,
  marginTop: 3,
  paddingLeft: 5,
  paddingRight: 5,
}

export default Suggestions
