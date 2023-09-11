function updateCurrentDayOfTheWeek() {
    const daysOfWeek = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
    ];
    const currentDate = new Date();
    const options = { weekday: 'long', timeZone: 'Africa/Lagos' }; // Nigeria's time zone
    const currentDay = new Intl.DateTimeFormat('en-US', options).format(
        currentDate
    );
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = 'Today is: ' + currentDay;
}

// Initial update
updateCurrentDayOfTheWeek();

// Update the current day of the week every 24 hours
setInterval(updateCurrentDayOfTheWeek, 86400000);

// Function to update the current local time in Nigeria (WAT time zone)
function updateCurrentLocalTime() {
    const currentDate = new Date();
    const options = { timeZone: 'Africa/Lagos' }; // Nigeria's time zone
    const localTime = currentDate.toLocaleTimeString('en-US', options);
    const utcTimeMilliseconds = currentDate.getTime(); // Get UTC time in milliseconds
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
        'Local Time: ' + localTime + ' | UTC Time (ms): ' + utcTimeMilliseconds;
}

// Initial update
updateCurrentLocalTime();

// Update the current local time every second
setInterval(updateCurrentLocalTime, 1000);
