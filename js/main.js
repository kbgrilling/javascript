// javascript file

const date = new Date();

let daysLong = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let daysShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let monthsLong = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let monthsShort = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let todayNum = date.getDay();
let todayDate = date.getDate();

const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };

function updateTime() {
  const newTime = new Date();
  return newTime
}





