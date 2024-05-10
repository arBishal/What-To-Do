import NoTodoCard from "./ui/NoTodoCard";

export default function Body() {
    return(
        <div className="bg-neutral-50 w-full h-full px-6 pb-4 pt-24 sm:pt-20 flex flex-col justify-start items-center">
            <NoTodoCard/>
        </div>
    );
}