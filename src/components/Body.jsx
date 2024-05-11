import { useState } from "react";

import NoTodoCard from "./ui/cards/NoTodoCard";
import PlusIcon from "./ui/icons/PlusIcon";
import { Form } from "./ui/Form";
import { Modal } from "./ui/Modal";

export default function Body() {
  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
    priority: ""
  });
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({todoData});
    const newTodoList = [...todoList, todoData];
    setTodoList(newTodoList);
    setShowModal(false);
  };

  return (
    <div className="bg-neutral-50 w-full h-full px-6 pb-4 pt-24 sm:pt-20 flex flex-col justify-start items-center">
      <NoTodoCard />

      {showModal && (
        <Modal heading="Add a To-do!" onClose={() => setShowModal(false)}>
          <Form todoData={todoData} setTodoData={setTodoData} onSubmit={handleSubmit}/>
        </Modal>
      )}

      <span
        className="fixed bottom-6 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon />
      </span>
    </div>
  );
}
