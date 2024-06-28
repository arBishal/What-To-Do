export default function ControlPanel(todoList) {
    return (
        <div className="max-w-screen-md w-full mb-2 flex gap-4 justify-between">
            {/* sorting */}
            <div className="w-full bg-white border-[1px] px-4 py-2 rounded-lg ">
                <h2 className="font-semibold">Sort By</h2>
                <span className="font-thin">Yet to implement.</span>

            </div>

            {/* filtering */}
            <div className="w-full bg-white border-[1px] px-4 py-2 rounded-lg ">
                <h2 className="font-semibold">Filter By</h2>
                <span className="font-thin">Yet to implement.</span>
            </div>
        </div>
    );
};