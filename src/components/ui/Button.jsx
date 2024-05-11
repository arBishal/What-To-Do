export const Button = ({children}) => {
    return (
        <span className="bg-neutral-950 hover:bg-neutral-900 p-2 rounded-sm text-white min-w-16 w-1/3 flex justify-center items-center cursor-pointer mt-4">
            {children}
        </span>
    );
}