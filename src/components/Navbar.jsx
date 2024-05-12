import { useState } from "react";
import { Modal } from "./ui/Modal";

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
  let greetings = "";
  if (hour > 18 || hour < 6) greetings = "Hey there, Moonflower!";
  else greetings = "Hey there, Sunflower!";

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="border-b-[1px] bg-white w-full px-6 py-4 flex justify-center align-middle fixed">
        <div className="max-w-screen-md w-full text-black flex flex-row gap-2 items-center justify-between">
          <span
            className="font-extrabold text-xl sm:text-2xl text-center order-1 sm:order-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
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

      {showModal && (
        <Modal heading="I Know What To-Do!" onClose={() => setShowModal(false)}>
          <div>
            <ul className="flex flex-col gap-2 list-disc list-inside">
              
              <li className="font-bold">
                Filter To-Do's
                <ul className="font-light text-sm list-disc list-inside ml-6">
                  <li>By Status</li>
                  <li>By Priority</li>
                </ul>
              </li>

              <li className="font-bold">
                Dark/Light Theme
                <ul className="font-light text-sm list-disc list-inside ml-6">
                  <li>Based on current time</li>
                  <li>Manual Toggle</li>
                </ul>
              </li>

              <li className="font-bold">
                Add Sub-To-Do's
              </li>

              <li className="font-bold">
                Add Deadline
              </li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
}
