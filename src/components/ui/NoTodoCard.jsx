import cat from "../../resources/cat-for-to-do.png";

export default function NoTodoCard() {
    return(
        <div className="max-w-screen-lg w-full text-black p-6 bg-white border-[1px] rounded-lg flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-2">
                Meow! Nothing To Do Right Neow!
            </h1>
            <p className="text-xl mb-6">
                Take me and pat me, please?
                Pretty please?
            </p>
            <img src={cat} alt="This is a happy cat to pat!" className="w-1/4 mb-1"/>
        </div>
    );
}