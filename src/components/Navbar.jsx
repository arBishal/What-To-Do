export default function Navbar() {
  const date = new Date();
  console.log(date);
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
  let month = months[date.getMonth()];
  let today = `${date.getUTCDate()} ${month}, ${date.getFullYear()}`;
  return (
    <div className="navbar-outer">
      <div className="navbar-inner">
        <span className="font-bold text-2xl">What-To-Do</span>
        <span className="mt-1 p-0"> {today} </span>
      </div>
    </div>
  );
}
