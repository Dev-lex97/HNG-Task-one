function updateDateTime() {
  // create a new `Date` object
  const now = new Date();
  const currentDateTime = Date.UTC(2023);
document.querySelector('[data-testid="currentUTCTime"]').textContent = currentDateTime;
}

setInterval(updateDateTime, 1000);

