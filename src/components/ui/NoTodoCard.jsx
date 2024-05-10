import cat from "../../resources/cat-for-to-do.png";

export default function NoTodoCard() {
    return(
        <div className="max-w-screen-lg w-full text-black p-6 bg-white border-[1px] rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-2">
                Yahoo! Nothing To Do Right Now!
            </h1>
            <p className="text-xl mb-6">
                Take this cat and pat it for now if you wish.
            </p>
            <img src={cat} alt="This is a happy cat to pat!" className="w-1/4 mb-1"/>
        </div>
    );
}