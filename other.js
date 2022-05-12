const dates = document.getElementsByClassName("dates");
const date = document.getElementsByClassName("date");
const hours = document.getElementById("selectHour");
const minutes = document.getElementById("selectMinutes");

const newInput = document.createElement("input");
const newLabel = document.createElement("label");
const newDiv = document.createElement("div");

const vanStation = document.getElementById("Van");
const naarStation = document.getElementById("Naar");

const switchStation = document.getElementById("switch");

const currentdate = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
};

const currentMinutes = currentdate.getMinutes();
const currentHour = currentdate.getHours();
const roundUpMinutes = Math.round(currentMinutes / 10) * 10;

console.log(Math.round(currentMinutes / 10) * 10);

switchStation.addEventListener("click", function (d) {
  d.preventDefault();
  console.log(vanStation.value);
  const vanStationSwitch = vanStation.value;
  const naarStationSwitch = naarStation.value;

  vanStation.value = naarStationSwitch;
  naarStation.value = vanStationSwitch;
});

for (let i = 0; i < 24; i++) {
  const wrapper = hours.appendChild(newDiv.cloneNode(true));
  const addInput = wrapper.appendChild(newInput.cloneNode(true));
  const addLabel = wrapper.appendChild(newLabel.cloneNode(true));

  const checkValue = i < 10 ? `0${i}` : `${i}`;

  if (currentHour + 1 === i) {
    addInput.setAttribute("checked", true);
  }

  addInput.setAttribute("type", "radio");
  addInput.setAttribute("id", `hour${i}`);
  addInput.setAttribute("class", "hour");
  addInput.setAttribute("name", "hours");
  addInput.setAttribute("value", `${checkValue}`);
  addInput.setAttribute("required", true);

  addLabel.setAttribute("for", `hour${i}`);
  addLabel.setAttribute("class", "hours");
  addLabel.textContent = `${checkValue}`;
}

for (let i = 0; i < 60; i = i + 10) {
  const wrapper = minutes.appendChild(newDiv.cloneNode(true));
  const addInput = wrapper.appendChild(newInput.cloneNode(true));
  const addLabel = wrapper.appendChild(newLabel.cloneNode(true));

  const checkValue = i < 10 ? `0${i}` : `${i}`;

  if (roundUpMinutes === i) {
    addInput.setAttribute("checked", true);
  }
  if (roundUpMinutes === 60 && i === 0) {
    addInput.setAttribute("checked", true);
  }

  addInput.setAttribute("type", "radio");
  addInput.setAttribute("id", `minute${i}`);
  addInput.setAttribute("class", "minute");
  addInput.setAttribute("name", "minutes");
  addInput.setAttribute("value", `${checkValue}`);
  addInput.setAttribute("required", true);

  addLabel.setAttribute("for", `minute${i}`);
  addLabel.setAttribute("class", "minutes");
  addLabel.textContent = `${checkValue}`;
}

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

  if (
    date[i].value ===
    `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`
  ) {
    date[i].setAttribute("checked", true);
  }
}

document.getElementById("selectTrip").addEventListener("submit", (d) => {
  d.preventDefault();
  const form = document.querySelector('form[name="selectTrip"]');
  const van = form.elements["Van"].value;
  const naar = form.elements["Naar"].value;
  const uur = form.elements["hours"].value;
  const minuut = form.elements["minutes"].value;
  const date = form.elements["date"].value;

  console.log(uur, minuut);

  window.location.href = `https://www.ns.nl/reisplanner/#/?vertrek=${encodeURIComponent(
    van
  )}&vertrektype=treinstation&aankomst=${encodeURIComponent(
    naar
  )}&aankomsttype=treinstation&type=vertrek&tijd=${date}T${uur}:${minuut}`;
});
