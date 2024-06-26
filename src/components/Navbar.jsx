import { useState } from "react";
import { Modal } from "./ui/Modal";
import wipImage from "../resources/work-in-progress.png";

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
        
        <div className="max-w-screen-md w-full text-black flex flex-row sm:grid sm:grid-cols-3 gap-2 items-center justify-between">
          
          <span
            className="font-extrabold text-xl sm:text-2xl text-center order-1 sm:order-2 cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            WhatToDo?
          </span>
          
          <div className="flex flex-col justify-center items-end sm:contents order-2">
            
            <span className="mt-1 p-0 text-sm sm:text-base text-right sm:text-left order-2 sm:order-1">
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

            <ul className="flex flex-col md:grid md:grid-cols-3 gap-2 list-disc list-inside">
              
              <li className="font-bold">Progress Bar</li>

              <li className="font-bold">
                Dynamic Status
              </li>

              <li className="font-bold">Alerts</li>

              <li className="font-bold">
                Filter To-Do's
                <ul className="font-light text-sm list-disc list-inside ml-6">
                  <li>By status</li>
                  <li>By priority</li>
                </ul>
              </li>

              <li className="font-bold">
                Dark Theme
                <ul className="font-light text-sm list-disc list-inside ml-6">
                  <li>Based on current time</li>
                  <li>Manual toggle</li>
                </ul>
              </li>

              <li className="font-bold">
                Sorting
                <ul className="font-light text-sm list-disc list-inside ml-6">
                  <li>By date</li>
                  <li>By priority</li>
                </ul>
              </li>

              <li className="font-bold">Drag & Drop</li>

              <li className="font-bold">Sub-To-Do's</li>

              <li className="font-bold">Deadline</li>
            </ul>

            <img src={wipImage} alt="work in progress" className="w-1/4 min-w-24 m-auto"/>

        </Modal>
      )}
    </>
  );
}
