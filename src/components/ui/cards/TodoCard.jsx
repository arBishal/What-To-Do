import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import DoneIcon from "../icons/DoneIcon";
import { Capsule } from "./Capsule";

export default function TodoCard({
  todo,
  title,
  description,
  priority,
  todoData,
  setTodoData,
  todoList,
  setTodoList,
  setShowModal,
  setModalTitle
}) {
  const handleEdit = () => {
    setTodoData(todo);
    setModalTitle("Edit the To-Do!")
    setShowModal(true);
  };

  const handleDone = () => {
    // setTodoData({
    //   ...todo,
    //   done: true,
    // });
    // const doneTodoList = todoList;
    // doneTodoList.splice(todoData.id - 1, 1, todoData);
    // setTodoList(doneTodoList);
  };

  const handleDelete = () => {
    const deleteTodoList = todoList.filter((delTodo) => {
      return delTodo.id != todo.id;
    });
    setTodoList(deleteTodoList);
  };

  if (description === "") {
    const noDescription = true;
  }
  return (
    <div
      className={
        todoData.status
          ? "max-w-screen-md w-full divide-y text-neutral-500 p-4 bg-neutral-50 border-[1px] rounded-lg flex flex-col justify-center items-center gap-2"
          : "max-w-screen-md w-full divide-y text-black p-4 bg-white border-[1px] rounded-lg flex flex-col justify-center items-center gap-2"
      }
    >
      <div className="w-full flex justify-between items-center gap-4">
        
        <p className="text-xl font-semibold px-1">{title}</p>
        
        <div className="flex items-center justify-start">
          
          <span className="mr-3">
            <Capsule priority={priority}>{priority}</Capsule>
          </span>
          
          <span
            onClick={handleEdit}
            className="text-neutral-500 hover:text-neutral-900 text-4xl p-1 hover:bg-neutral-100 hover:rounded-full cursor-pointer"
          >
            <EditIcon />
          </span>
          
          <span
            onClick={handleDone}
            className="text-neutral-500 hover:text-neutral-900 text-4xl p-1 hover:bg-neutral-100 hover:rounded-full cursor-pointer"
          >
            <DoneIcon />
          </span>
          
          <span
            onClick={handleDelete}
            className="text-neutral-500 hover:text-neutral-900 text-4xl p-1 hover:bg-neutral-100 hover:rounded-full cursor-pointer"
          >
            <DeleteIcon />
          </span>
        </div>
      </div>

      <div className="w-full">
        <p className="text-sm sm:text-base px-1 mt-2"> {description} </p>
      </div>
    </div>
  );
}
