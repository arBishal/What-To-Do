import { useState } from "react";

import NoTodoCard from "./ui/cards/NoTodoCard";
import PlusIcon from "./ui/icons/PlusIcon";
import { Form } from "./ui/Form";
import { Modal } from "./ui/Modal";
import TodoCard from "./ui/cards/TodoCard";

export default function Body() {
  const [todoData, setTodoData] = useState({
    id: 0,
    title: "",
    description: "",
    priority: "",
    time: "",
  });
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newTodo = {};
    
    if(todoData.id===0)
      {
        newTodo = {
          ...todoData,
          id: todoList.length>0 ? todoList[todoList.length - 1].id + 1 : 1,
          time: new Date(),
        };

        setTodoData(newTodo);
        setTodoList([...todoList, newTodo]);
      }

    else
    {
      const newTodoList = todoList;
      newTodoList.splice(todoData.id - 1, 1, todoData);
      setTodoList(newTodoList);
    }

    handleClose();
  };

  const handleClose = () => {
    console.log(todoData);
    console.log(todoList);
    
    setTodoData({
      id: 0,
      title: "",
      description: "",
      priority: "",
      time: "",
    });

    setShowModal(false);
  }

  // console.log(todoList);

  return (
    <div className="bg-neutral-50 w-full h-full px-6 pb-4 pt-24 sm:pt-20 flex flex-col justify-start items-center">
      {!todoList.length && <NoTodoCard />}

      {showModal && (
        <Modal heading="Add a To-do!" onClose={handleClose}>
          <Form
            todoData={todoData}
            setTodoData={setTodoData}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}

      {todoList.map((todo, i) => {
        return (
          <TodoCard
            todo={todo}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
            setTodoData={setTodoData}
            setShowModal={setShowModal}
          />
        );
      })}

      <span
        className="fixed bottom-6 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon />
      </span>
    </div>
  );
}
