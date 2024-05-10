import Button from "./ui/Button";
import NoTodoCard from "./ui/NoTodoCard";
import PlusIcon from "./ui/icons/PlusIcon";

export default function Body() {
  return (
    <div className="bg-neutral-50 w-full h-full px-6 pb-4 pt-24 sm:pt-20 flex flex-col justify-start items-center">
      <NoTodoCard />
      <span className="fixed bottom-6 cursor-pointer">
        <PlusIcon />
      </span>
    </div>
  );
}
