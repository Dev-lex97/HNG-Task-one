function updateDateTime() {
  // create a new `Date` object
  const now = new Date();
  const currentDateTime = Date.UTC(2023);
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);

// Function to display the day of the week
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

  const day = new Date().getDay();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = daysOfTheWeek[day];

//function expression to update time
