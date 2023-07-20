import { useState } from "react";
import Counter from "../Counter/Counter";
import Tasklist from "../TaskList/tasklist";
import Form from "../TodoForm/input";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };

  const deleteItem = (id) => {
    //Aqui recibo un id personalizado
    //y la tarea que quiero eliminar

    const newList = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].id !== id) {
        newList.push(list[i]);
      }
    }
    setList(newList);
    console.log(list);
    console.log(newList);
  };

  const toggleDone = (id) => {
    const listNew = [...list];
    for (let i = 0; i < listNew.length; i++) {
      if (list[i].id === id) {
        const currentCheck = list[i].checked;
        list[i].checked = !currentCheck;
        break;
      }
    }
    setList(listNew);
  };

  return (
    <>
      <Counter list={list} />
      <Form handleAddItem={handleAddItem} />
      <Tasklist
        list={list}
        handleDelete={deleteItem}
        handleCheck={toggleDone}
      />
    </>
  );
};

export default Container;
