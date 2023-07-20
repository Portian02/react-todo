import "./list.css";

const ListItem = (prop) => {
  const {
    handleDelete,
    handleCheck,
    data: { id, task, checked },
  } = prop;

  return (
    <div className="container-tasks">
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

      <button className="btnDelete" onClick={handleDelete} variant="primary">
      🗑️
      </button>
    </div>
  );
};

export default ListItem;
