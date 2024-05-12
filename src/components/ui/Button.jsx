export const Button = ({children}) => {
    return (
        <button className="bg-black hover:bg-neutral-800 p-2 rounded text-white min-w-16 w-1/3 flex justify-center items-center cursor-pointer mt-4">
            {children}
        </button>
    );
}