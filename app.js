const form = document.getElementById("registration-form");
const table = document.getElementById("registration-table");
const resume = document.getElementById("resume");

form.addEventListener("submit", event => {
  event.preventDefault();

  const name = form.elements.name.value;
  const age = form.elements.age.value;
  const money = form.elements.money.value;

  if (name.length < 10) {
    alert("Nama minimal 10 karakter");
    return;
  }

  if (age < 25) {
    alert("Umur minimal 25 tahun");
    return;
  }

  if (money < 100000 || money > 1000000) {
    alert("Uang sangu minimal 100 ribu dan maksimal 1 juta");
    return;
  }

  const row = table.getElementsByTagName("tbody")[0].insertRow();
  row.insertCell()



  HTML = name;
  row.insertCell().innerHTML = name;
  row.insertCell().innerHTML = age;
  row.insertCell().innerHTML = money;

  const rows = table.getElementsByTagName("tbody")[0].rows;
  let totalAge = 0;
  let totalMoney = 0;
  for (const row of rows) {
    totalAge += parseInt(row.cells[2].innerHTML);
    totalMoney += parseInt(row.cells[3].innerHTML);
  }
  const avgAge = totalAge / rows.length;
  const avgMoney = totalMoney / rows.length;
  sangu.innerHTML = `Rata rata pendaftar memiliki uang sangu sebesar = ${avgMoney}`;
  umur.innerHTML = `rata rata umur = ${avgAge}`;
});
