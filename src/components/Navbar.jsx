export default function Navbar() {
// build todays date
  const date = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let today = `${weekday[date.getDay()]}, ${months[date.getMonth()]} ${date.getUTCDate()}, ${date.getFullYear()}`;
  
// specify greetings based on hour
let hour = date.getHours();
console.log(hour);
let greetings = "";
if(hour>18 || hour<6) greetings = "Hey there, Night Owl!"
else greetings = "Hey there, Sunflower!"

  
  return (
    <div className="navbar-outer">
      <div className="navbar-inner">
        <span className="mt-1 p-0"> {greetings} </span>
        <span className="font-extrabold text-2xl">What-To-Do-?</span>
        <span className="mt-1 p-0"> {today} </span>
      </div>
    </div>
  );
}
