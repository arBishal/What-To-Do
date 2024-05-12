export default function StatusCard({ todoList }) {
    let completeCount = 0;
    let remainingCount = 0;

    for(let i=0; i<todoList.length; i++) {
        if(todoList[i].done) completeCount++;
        else remainingCount++;
    }

    return (
        <div className="max-w-screen-md w-full mb-2 flex flex-col items-center justify-center">
            <h1 className="text-2xl sm:text-3xl font-thin mb-1">
                Here is your Status!
            </h1>
            <p className="font-semibold">
                To-Do Completed: {completeCount} 
            </p>
            <p className="font-semibold">
                To-Do Remaining: {remainingCount}
            </p>
        </div>
    );
}