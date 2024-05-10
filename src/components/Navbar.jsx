export default function Navbar() {
  // build todays date
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let today = `${weekday[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getUTCDate()}, ${date.getFullYear()}`;

  // specify greetings based on hour
  let hour = date.getHours();
  console.log(hour);
  let greetings = "";
  if (hour > 18 || hour < 6) greetings = "Hey there, Moonflower!";
  else greetings = "Hey there, Sunflower!";

  return (
    <div className="border-b-[1px] bg-white px-6 py-4 flex justify-center align-middle">
      <div className="max-w-screen-md w-full text-black flex flex-row gap-2 items-center justify-between">
        <span className="font-extrabold text-xl sm:text-2xl text-center order-1 sm:order-2">
          WhatToDo?
        </span>
        <div className="flex flex-col justify-center items-end sm:contents order-2">
          <span className="mt-1 p-0 text-sm sm:text-base text-right order-2 sm:order-1">
            {greetings}
          </span>
          <span className="mt-1 p-0 text-sm sm:text-base text-right order-3">
            {today}
          </span>
        </div>
      </div>
    </div>
  );
}
