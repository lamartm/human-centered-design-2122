const dates = document.getElementsByClassName("dates");
const date = document.getElementsByClassName("date");
const options = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

for (let i = 0; i < dates.length; i++) {
  const newDate = new Date();
  newDate.setDate(newDate.getDate() + i);
  dates[i].textContent = newDate.toLocaleDateString(undefined, options);
}

for (let i = 0; i < date.length; i++) {
  const newDate = new Date();
  date[i].setAttribute(
    "value",
    newDate.getFullYear() +
      "-" +
      (newDate.getMonth() + 1) +
      "-" +
      (newDate.getDate() + i)
  );
}

document.getElementById("selectTrip").addEventListener("submit", (d) => {
  d.preventDefault();
  const form = document.querySelector('form[name="selectTrip"]');
  const van = form.elements["Van"].value;
  const naar = form.elements["Naar"].value;
  const tijd = form.elements["time"].value;
  const date = form.elements["date"].value;
  window.location.href = `https://www.ns.nl/reisplanner/#/?vertrek=${encodeURIComponent(
    van
  )}&vertrektype=treinstation&aankomst=${encodeURIComponent(
    naar
  )}&aankomsttype=treinstation&type=vertrek&tijd=${date}T${tijd}`;
});
