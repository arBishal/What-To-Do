export default function StatusCard({ todoList }) {
  let completeCount = 0;
  let remainingCount = 0;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].done) completeCount++;
    else remainingCount++;
  }

  let percentage = (completeCount / (completeCount + remainingCount)) * 100;

  return (
    <div className="max-w-screen-md w-full mb-2 flex flex-col items-center justify-center">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 px-4 py-2 rounded-t w-full text-center bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold leading-tight sm:order-2">
          Here is your Status!
        </h1>
        <div className="sm:contents w-full flex justify-between gap-2">
          <p className="font-thin sm:order-1">Completed: {completeCount}</p>
          <p className="font-thin sm:order-3">Remaining: {remainingCount}</p>
        </div>
      </div>
      <div className="w-full h-1 bg-neutral-200 rounded-b"></div>
    </div>
  );
}
