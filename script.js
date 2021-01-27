const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calcBtn = document.getElementById('calculate-wealth');
let data = [];
async function getRandomUser() {
  // fetch random user and add money
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() *1000000)
  }

  addData(newUser);
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}

function updateDOM(providedData = data) {
  // Clearing the main element
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';
  providedData.forEach( item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
    main.appendChild(element);
  })
}

function formatMoney(number) {
  return '$' + number;
}
function doubleMoney() {
  let double = data.map( obj => ({ name: obj.name, money: obj.money*2 }));
  data = double;
  updateDOM();
}
function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const personA = a.money;
  const personB = b.money;

  let comparison = 0;
  if (personA > personB) {
    comparison = 1;
  } else if (personA < personB) {
    comparison = -1;
  }
  return comparison;
}
function sortByRichest() {
  data.sort(compare);
  updateDOM();
}
function showMillionaires() {
  let filteredData = data.filter( obj =>  obj.money >= 1000000 )
  data = filteredData;
  updateDOM();
}


function calculateWealth() {
  let reducedData = data.reduce( (sum, { money }) => sum + money, 0);
  updateDOM();
  const totalEle = document.createElement('div');
  totalEle.classList.add('person');
  totalEle.id = "total";
  totalEle.innerHTML = `<strong>Total Wealth:</strong><strong> $${reducedData}</strong>`;
  main.appendChild(totalEle);  
 
}
// Event listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calcBtn.addEventListener("click", calculateWealth);