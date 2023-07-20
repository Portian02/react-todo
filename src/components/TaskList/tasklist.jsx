import ListItem from "../listItem";
import "./list.css";

const Tasklist = ({ list, handleDelete, handleCheck }) => {
  console.log("dentro", list);
  const tareas = list.map((item, index) => (
    <ListItem
      key={index}
      data={item}
      handleDelete={() => handleDelete(item.id)}
      handleCheck={handleCheck}
    />
  ));

  return (
    <div className="task-list">
      {list.length ? <div className="list">{tareas}</div> : "No hay Tareas"}

      {/* {list.length ? (
        <button className=" btn2" onClick={onClickRemoveItem}>
          Borrar tareas 
        </button>
      ) : null} */}
    </div>
  );
};

export default Tasklist;
