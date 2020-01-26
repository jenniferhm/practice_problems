// Leetcode 1185: Day of the Week

var dayOfTheWeek = function(day, month, year) {
  const days = {0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday"};
  
  let date = new Date(year, month-1, day);
    
  let numDay = date.getDay();
    
  return days[numDay];
};

module.exports = dayOfTheWeek;