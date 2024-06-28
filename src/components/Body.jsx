import { useState, useEffect } from "react";

import NoTodoCard from "./ui/cards/NoTodoCard";
import PlusIcon from "./ui/icons/PlusIcon";
import { Form } from "./ui/Form";
import { Modal } from "./ui/Modal";
import TodoCard from "./ui/cards/TodoCard";
import StatusCard from "./ui/cards/StatusCard";
import ControlPanel from "./ui/cards/ControlPanel";

export default function Body() {
  const [todoData, setTodoData] = useState({
    id: 0,
    title: "",
    description: "",
    priority: "",
    done: false,
    time: ""
  });

  const [todoList, setTodoList] = useState(() => {
    const saved = localStorage.getItem("todoList");
    const initialValue = JSON.parse(saved);
    console.log("initialize state", initialValue);
    return initialValue || [];
  });
  
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {};

    if (todoData.id === 0) {
      newTodo = {
        ...todoData,
        id: todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1,
        time: new Date(),
      };

      setTodoData(newTodo);
      setTodoList([...todoList, newTodo]);

      console.log("new todo created");
    } else {
      const newTodoList = todoList.map((todo) => {
        return todo.id===todoData.id ? todoData : todo;
      });
      setTodoList(newTodoList);

      console.log("existing todo edited");
    }

    handleClose();
  };

  const handleCreate = () => {
    setModalTitle("Create a To-Do!");
    setShowModal(true);
  }

  const handleClose = () => {
    setTodoData({
      id: 0,
      title: "",
      description: "",
      priority: "",
      done: false,
      time: ""
    });

    setShowModal(false);
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])

  console.log("in the body", todoList);

  return (
    <div className="bg-neutral-50 w-full h-full px-6 pb-4 pt-24 sm:pt-20 flex flex-col justify-start items-center gap-2">
      
      {showModal && (
        <Modal heading={modalTitle} onClose={handleClose}>
          <Form
            todoData={todoData}
            setTodoData={setTodoData}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}

      {!todoList.length && <NoTodoCard />}

      {todoList.length>0 && <StatusCard todoList={todoList} />}
      {todoList.length>0 && <ControlPanel todoList={todoList} />}

      {todoList.map((todo, i) => {
        return (
          <TodoCard
            todo={todo}
            title={todo.title}
            description={todo.description}
            priority={todo.priority}
            todoData={todoData}
            setTodoData={setTodoData}
            todoList={todoList}
            setTodoList={setTodoList}
            setShowModal={setShowModal}
            setModalTitle={setModalTitle}
          />
        );
      })}

      <span
        className="fixed bottom-6 cursor-pointer hover:scale-105"
        onClick={handleCreate}
      >
        <PlusIcon />
      </span>
    </div>
  );
}
