function ChangeListName({ newListName, onChange, updateListName }) {
  return (
    <div>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={({ key }) =>
          key === 'Enter' && newListName && updateListName(newListName)
        }
        value={newListName}
      />
      <button onClick={updateListName} disabled={!newListName}>
        Confirm
      </button>
    </div>
  )
}

export default ChangeListName
