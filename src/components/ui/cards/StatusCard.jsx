export default function StatusCard({ todoList }) {
    return (
        <div className="max-w-screen-md w-full mb-2 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl font-thin mb-1">
                Here is your Status!
            </h1>
            <p className="font-semibold">
                To-Do Completed: 3 
            </p>
            <p className="font-semibold">
                To-Do Remained: 2
            </p>
        </div>
    );
}