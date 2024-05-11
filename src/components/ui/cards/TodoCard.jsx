import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { Capsule } from "./Capsule";
import { Modal } from "../Modal";

export default function TodoCard({
  todo,
  index,
  title,
  description,
  priority,
  showModal,
  setShowModal
}) 

{
  return (
    <div className="max-w-screen-md w-full text-black p-4 bg-white border-[1px] rounded-lg flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-between items-center gap-4">
        <p className="text-xl font-semibold">{title}</p>
        <Capsule priority={priority}>{priority}</Capsule>
      </div>
      <div className="w-full flex  justify-between items-center gap-4 botder-t-[1px]">
        <p className="text-sm sm:text-base"> {description} </p>
        <div className="flex items-center justify-start gap-2">
          <span onClick={() => setShowModal(true)}>
            <EditIcon />
          </span>
          <spna>
            <DeleteIcon />
          </spna>
        </div>
      </div>
    </div>
  );
}
