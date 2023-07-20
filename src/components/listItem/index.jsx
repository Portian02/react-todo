const ListItem = (prop) => {
  const {
    handleDelete,
    handleCheck,
    data: { id, task, checked },
  } = prop;

  return (
    <div>
      <input
        className="input"
        name={id}
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={() => {
          handleCheck(id);
        }}
      />

      <p className="todo__text">{task}</p>

      <button onClick={handleDelete} variant="primary">
        Delete
      </button>
    </div>
  );
};

export default ListItem;
